using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Server.Interfaces;
using Server.Models;

#nullable disable

namespace Server
{
    public partial class mangafilrouge_bddContext : DbContext
    {
        public mangafilrouge_bddContext()
        {
        }

        public mangafilrouge_bddContext(DbContextOptions<mangafilrouge_bddContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Anime> Animes { get; set; }
        public virtual DbSet<CategoryListPerso> CategoryListPersos { get; set; }
        public virtual DbSet<ListPerso> ListPersos { get; set; }
        public virtual DbSet<Manga> Mangas { get; set; }
        public virtual DbSet<MangaAmateur> MangaAmateurs { get; set; }
        public virtual DbSet<Report> Reports { get; set; }
        public virtual DbSet<Review> Reviews { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                //optionsBuilder.UseMySql(Configuration.GetConnectionString("admin"), Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.6.5-mariadb"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_general_ci");

            modelBuilder.Entity<CategoryListPerso>(entity =>
            {
                entity.ToTable("category_list_perso");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Label)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("label");
            });

            modelBuilder.Entity<Anime>(entity =>
            {
                entity.ToTable("anime");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");
            });

            modelBuilder.Entity<ListPerso>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.AnimeId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("list_perso");

                entity.HasIndex(e => e.CategoryListPersoId, "INDEX_CATEGORY-LIST-PERSO-ID");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(11)")
                    .HasColumnName("user_id");

                entity.Property(e => e.AnimeId)
                    .HasColumnType("int(11)")
                    .HasColumnName("anime_id");

                entity.Property(e => e.CategoryListPersoId)
                    .HasColumnType("int(11)")
                    .HasColumnName("category_list_perso_id");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("end_date");

                entity.Property(e => e.Favorite).HasColumnName("favorite");

                entity.Property(e => e.Privacy).HasColumnName("privacy");

                entity.Property(e => e.Progression)
                    .HasColumnType("int(11)")
                    .HasColumnName("progression");

                entity.Property(e => e.Score).HasColumnName("score");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("start_date");

                entity.Property(e => e.TotalRewatch)
                    .HasColumnType("int(11)")
                    .HasColumnName("total_rewatch");

                entity.HasOne(d => d.Anime)
                    .WithMany(p => p.ListPersos)
                    .HasForeignKey(d => d.AnimeId)
                    .HasConstraintName("FK_AnimeListPerso");

                entity.HasOne(d => d.CategoryListPerso)
                    .WithMany(p => p.ListPersos)
                    .HasForeignKey(d => d.CategoryListPersoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CategoryLPListPerso");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ListPersos)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_UserListPerso");
            });

            modelBuilder.Entity<Manga>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PRIMARY");

                entity.ToTable("manga");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");
            });

            modelBuilder.Entity<MangaAmateur>(entity =>
            {
                entity.ToTable("manga_amateur");

                entity.HasIndex(e => e.UserId, "INDEX_USER");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(30)
                    .HasColumnName("status");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(11)")
                    .HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.MangaAmateur)
                    .HasForeignKey<MangaAmateur>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserMangaAmateur");
            });

            modelBuilder.Entity<Report>(entity =>
            {
                entity.ToTable("report");

                entity.HasIndex(e => e.MangaAmateurId, "INDEX_MANGA-AMATEUR-ID");

                entity.HasIndex(e => e.ReviewId, "INDEX_REVIEW-ID");

                entity.HasIndex(e => e.UserReporterId, "INDEX_USER-REPORTER-ID");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("category");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(300)
                    .HasColumnName("description");

                entity.Property(e => e.MangaAmateurId)
                    .HasColumnType("int(11)")
                    .HasColumnName("manga_amateur_id");

                entity.Property(e => e.ReviewId)
                    .HasColumnType("int(11)")
                    .HasColumnName("review_id");

                entity.Property(e => e.TypeContenu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("type_contenu");

                entity.Property(e => e.UserReporterId)
                    .HasColumnType("int(11)")
                    .HasColumnName("user_reporter_id");

                entity.HasOne(d => d.MangaAmateur)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.MangaAmateurId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_MangaAmateurReport");

                entity.HasOne(d => d.Review)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.ReviewId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_ReviewReport");

                entity.HasOne(d => d.UserReporter)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.UserReporterId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_UserReport");
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.ToTable("review");

                entity.HasIndex(e => e.UserId, "INDEX_USER-ID");

                entity.HasIndex(e => e.AnimeId, "INDEX_ANIME-ID");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Dislikes)
                    .HasColumnType("int(11)")
                    .HasColumnName("dislikes");

                entity.Property(e => e.Likes)
                    .HasColumnType("int(11)")
                    .HasColumnName("likes");

                entity.Property(e => e.ScoreReview)
                    .HasColumnType("int(11)")
                    .HasColumnName("score_review");

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("text");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(11)")
                    .HasColumnName("user_id");

                entity.Property(e => e.AnimeId)
                    .HasColumnType("int(11)")
                    .HasColumnName("anime_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserReview");

                entity.HasOne(d => d.Anime)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.AnimeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AnimeReview");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.Email, "INDEX_EMAIL");

                entity.HasIndex(e => e.Pseudo, "INDEX_PSEUDO");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.AdultContent).HasColumnName("adult_content");

                entity.Property(e => e.Description)
                    .HasMaxLength(300)
                    .HasColumnName("description");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(300)
                    .HasColumnName("password");

                entity.Property(e => e.PreferredTitle)
                    .HasMaxLength(15)
                    .HasColumnName("preferred_title");

                entity.Property(e => e.Privacy).HasColumnName("privacy");

                entity.Property(e => e.ProfilePicture)
                    .HasMaxLength(150)
                    .HasColumnName("profile_picture");

                entity.Property(e => e.Pseudo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("pseudo");

                entity.Property(e => e.TimeZone)
                    .HasMaxLength(10)
                    .HasColumnName("time_zone");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
