using Server.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories.Interfaces
{
    public interface ICategoryListPersoRepository
    {
        ICategoryListPerso GetCategoryListPerso(int id);
        IEnumerable<ICategoryListPerso> GetCategoryListPersos();
        ICategoryListPerso AddCategoryListPerso(ICategoryListPerso categoryListPerso);
        ICategoryListPerso UpdateCategoryListPerso(ICategoryListPerso categoryListPerso);
        ICategoryListPerso DeleteCategoryListPerso(int id);

    }
}
