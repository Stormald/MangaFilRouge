using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface ICategoryListPersoService
    {
        ICategoryListPerso GetCategoryListPerso(int id);
        IEnumerable<ICategoryListPerso> GetCategoryListPersos();
        ICategoryListPerso AddCategoryListPerso(CategoryListPerso categoryListPerso);
        ICategoryListPerso UpdateCategoryListPerso(CategoryListPerso categoryListPerso);
        ICategoryListPerso DeleteCategoryListPerso(int id);
    }
}
