using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Server.Repositories;
using Server.Repositories.Interfaces;
using Server.Repositories.MariaDB;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Server
{
    public class Startup
    {
        private readonly IConfiguration Configuration;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            }));

            services.AddEntityFrameworkMySql().AddDbContext<mangafilrouge_bddContext>(options =>
            {
                options.UseMySql(Configuration.GetConnectionString("admin"), Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.6.5-mariadb"),
                    mySqlOptionsAction: mySqlOptions =>
                    {
                        mySqlOptions.EnableRetryOnFailure();
                    });
            });
            // REPOSITORIES
            services.AddTransient<ICategoryListPersoRepository, CategoryListPersoRepository>();
            services.AddTransient<IReviewRepository, ReviewRepository>();
            services.AddTransient<IAnimeRepository, AnimeRepository>();

            // SERVICES
            services.AddTransient<ICategoryListPersoService, CategoryListPersoService>();
            services.AddTransient<IReviewService, ReviewService>();
            services.AddTransient<IAnimeService, AnimeService>();

            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.WriteIndented = true;
            });
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("MyPolicy");

            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
