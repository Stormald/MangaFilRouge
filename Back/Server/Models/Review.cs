using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Review : IReview
    {
        public Review()
        {
            Reports = new HashSet<Report>();
        }

        public int Id { get; set; }
        public string Text { get; set; }
        public int ScoreReview { get; set; }
        public int? Likes { get; set; }
        public int? Dislikes { get; set; }
        public int UserId { get; set; }
        public int AnimeId { get; set; }

        public virtual User User { get; set; }
        public virtual Anime Anime { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}
