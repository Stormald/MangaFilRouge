using Server.Models;
using System.Collections.Generic;

namespace Server.Interfaces
{
    public interface IMangaAmateur
    {
        int Id { get; set; }
        User User { get; set; }
        ICollection<Report> Reports { get; set; }
        string Status { get; set; }
        int UserId { get; set; }
    }
}