using Server.Models;
using System.Collections.Generic;

namespace Server.Interfaces
{
    public interface ICategoryListPerso
    {
        int Id { get; set; }
        string Label { get; set; }
        ICollection<ListPerso> ListPersos { get; set; }
    }
}