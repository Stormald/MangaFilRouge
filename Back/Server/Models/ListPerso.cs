using System;
using System.Collections.Generic;
using Server.Interfaces;


#nullable disable

namespace Server.Models
{
    public partial class ListPerso : IListPerso
    {
        public int UserId { get; set; }
        public int AnimeId { get; set; }
        public double? Score { get; set; }
        public bool Favorite { get; set; }
        public bool Privacy { get; set; }
        public int? Progression { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? TotalRewatch { get; set; }
        public int CategoryListPersoId { get; set; }

        public virtual Anime Anime { get; set; }
        public virtual CategoryListPerso CategoryListPerso { get; set; }
        public virtual User User { get; set; }
    }
}
