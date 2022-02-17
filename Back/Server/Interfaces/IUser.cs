using Server.Models;
using System.Collections.Generic;

namespace Server.Interfaces
{
    public interface IUser
    {
        bool AdultContent { get; set; }
        string Description { get; set; }
        string Email { get; set; }
        int Id { get; set; }
        ICollection<ListPerso> ListPersos { get; set; }
        MangaAmateur MangaAmateur { get; set; }
        string Password { get; set; }
        string PreferredTitle { get; set; }
        bool Privacy { get; set; }
        string ProfilePicture { get; set; }
        string Pseudo { get; set; }
        ICollection<Report> Reports { get; set; }
        ICollection<Review> Reviews { get; set; }
        string TimeZone { get; set; }
    }
}