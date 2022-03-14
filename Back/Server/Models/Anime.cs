using Server.Interfaces;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Server.Models
{
    public partial class Anime : IAnime
    {
        public Anime()
        {
            ListPersos = new HashSet<ListPerso>();
            Reviews = new HashSet<Review>();
        }

        public int Id { get; set; }

        public virtual ICollection<ListPerso> ListPersos { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }

    }
}
