using Server.Models;
using System.Collections.Generic;

namespace Server.Interfaces
{
    public interface IAnime
    {
        int Id { get; set; }
        ICollection<ListPerso> ListPersos { get; set; }
    }
}