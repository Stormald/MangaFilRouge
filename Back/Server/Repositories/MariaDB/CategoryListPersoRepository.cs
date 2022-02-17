using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
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

        public ICategoryListPerso AddCategoryListPerso(ICategoryListPerso categoryListPerso)
        {
            return null;
        }

        public ICategoryListPerso DeleteCategoryListPerso(int id)
        {
            throw new NotImplementedException();
        }

        public ICategoryListPerso GetCategoryListPerso(int id)
        {
            return context.CategoryListPersos.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<ICategoryListPerso> GetCategoryListPersos()
        {
            throw new NotImplementedException();
        }

        public ICategoryListPerso UpdateCategoryListPerso(ICategoryListPerso categoryListPerso)
        {
            throw new NotImplementedException();
        }
    }
}
