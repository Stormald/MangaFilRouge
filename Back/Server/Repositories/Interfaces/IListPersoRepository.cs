using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories.Interfaces
{
    public interface IListPersoRepository
    {
        ListPerso GetListPerso(int id);
        IEnumerable<ListPerso> GetListPersos();
        IEnumerable<ListPerso> GetListPersosByUserId(int id);
        ListPerso AddListPerso(ListPerso listPerso);
        ListPerso GetListPersoByUserIdAndAnimeId(int userId, int animeId);
        ListPerso UpdateListPerso(ListPerso listPerso);
        void DeleteListPerso(int id);

    }
}
