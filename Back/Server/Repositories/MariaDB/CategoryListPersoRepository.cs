using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;

namespace Server.Repositories.MariaDB
{
    public class CategoryListPersoRepository : ICategoryListPersoRepository
    {
        private readonly mangafilrouge_bddContext context;
        public CategoryListPersoRepository(mangafilrouge_bddContext Context)
        {
            context = Context;
        }

        public CategoryListPerso AddCategoryListPerso(CategoryListPerso categoryListPerso)
        {
            return null;
        }

        public CategoryListPerso DeleteCategoryListPerso(int id)
        {
            throw new NotImplementedException();
        }

        public CategoryListPerso GetCategoryListPerso(int id)
        {
            return context.CategoryListPersos.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<CategoryListPerso> GetCategoryListPersos()
        {
            return this.context.CategoryListPersos.ToList();
        }

        public CategoryListPerso UpdateCategoryListPerso(CategoryListPerso categoryListPerso)
        {
            throw new NotImplementedException();
        }
    }
}
