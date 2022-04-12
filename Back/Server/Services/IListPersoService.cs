using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IListPersoService
    {
        IListPerso GetListPerso(int id);
        IEnumerable<IListPerso> GetListPersos();
        IEnumerable<IListPerso> GetListPersosByUserId(int id);
        IListPerso AddListPerso(ListPerso listPerso);
        IListPerso UpdateListPerso(ListPerso listPerso);
        void DeleteListPerso(int id);
    }
}
