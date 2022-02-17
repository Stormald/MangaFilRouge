using Server.Models;
using System.Collections.Generic;

namespace Server.Interfaces
{
    public interface IReview
    {
        int? Dislikes { get; set; }
        int Id { get; set; }
        int? Likes { get; set; }
        ICollection<Report> Reports { get; set; }
        int ScoreReview { get; set; }
        string Text { get; set; }
        User User { get; set; }
        int UserId { get; set; }
    }
}