using Server.Models;

namespace Server.Interfaces
{
    public interface IReport
    {
        string Category { get; set; }
        string Description { get; set; }
        int Id { get; set; }
        MangaAmateur MangaAmateur { get; set; }
        int? MangaAmateurId { get; set; }
        Review Review { get; set; }
        int? ReviewId { get; set; }
        string TypeContenu { get; set; }
        User UserReporter { get; set; }
        int? UserReporterId { get; set; }
    }
}