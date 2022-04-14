using Server.Models;
using System;

namespace Server.Interfaces
{
    public interface IListPerso
    {
        Anime Anime { get; set; }
        int AnimeId { get; set; }
        CategoryListPerso CategoryListPerso { get; set; }
        int CategoryListPersoId { get; set; }
        DateTime? EndDate { get; set; }
        bool Favorite { get; set; }
        bool Privacy { get; set; }
        int? Progression { get; set; }
        double? Score { get; set; }
        DateTime? StartDate { get; set; }
        int? TotalRewatch { get; set; }
        User User { get; set; }
        int UserId { get; set; }
    }
}