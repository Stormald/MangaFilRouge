using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Report : IReport
    {
        public int Id { get; set; }
        public string TypeContenu { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public int? UserReporterId { get; set; }
        public int? MangaAmateurId { get; set; }
        public int? ReviewId { get; set; }

        public virtual MangaAmateur MangaAmateur { get; set; }
        public virtual Review Review { get; set; }
        public virtual User UserReporter { get; set; }
    }
}
