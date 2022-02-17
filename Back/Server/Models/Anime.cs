using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Anime : IAnime
    {
        public Anime()
        {
            ListPersos = new HashSet<ListPerso>();
        }

        public int Id { get; set; }

        public virtual ICollection<ListPerso> ListPersos { get; set; }
    }
}
