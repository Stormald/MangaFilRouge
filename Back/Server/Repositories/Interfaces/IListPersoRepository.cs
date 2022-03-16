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
        IEnumerable<IListPerso> GetListsPerso();
        ListPerso AddListPerso(ListPerso listPerso);
        IListPerso UpdateListPerso(ListPerso listPerso);
        //void DeleteReview(int id);
    }
}
