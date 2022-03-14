using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories.Interfaces
{
    public interface ICategoryListPersoRepository
    {
        CategoryListPerso GetCategoryListPerso(int id);
        IEnumerable<CategoryListPerso> GetCategoryListPersos();
        CategoryListPerso AddCategoryListPerso(CategoryListPerso categoryListPerso);
        CategoryListPerso UpdateCategoryListPerso(CategoryListPerso categoryListPerso);
        CategoryListPerso DeleteCategoryListPerso(int id);

    }
}
