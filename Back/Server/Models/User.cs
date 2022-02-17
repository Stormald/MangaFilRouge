using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class User : IUser
    {
        public User()
        {
            ListPersos = new HashSet<ListPerso>();
            Reports = new HashSet<Report>();
            Reviews = new HashSet<Review>();
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string Pseudo { get; set; }
        public string Password { get; set; }
        public string Description { get; set; }
        public string ProfilePicture { get; set; }
        public string TimeZone { get; set; }
        public bool Privacy { get; set; }
        public string PreferredTitle { get; set; }
        public bool AdultContent { get; set; }

        public virtual MangaAmateur MangaAmateur { get; set; }
        public virtual ICollection<ListPerso> ListPersos { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}
