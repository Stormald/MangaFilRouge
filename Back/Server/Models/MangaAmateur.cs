using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class MangaAmateur : IMangaAmateur
    {
        public MangaAmateur()
        {
            Reports = new HashSet<Report>();
        }

        public int Id { get; set; }
        public string Status { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}
