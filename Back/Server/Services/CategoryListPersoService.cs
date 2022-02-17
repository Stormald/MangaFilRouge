using Server.Interfaces;
using Server.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class CategoryListPersoService : ICategoryListPersoService
    {
        private readonly ICategoryListPersoRepository repo;
        public CategoryListPersoService(ICategoryListPersoRepository Repo)
        {
            repo = Repo;
        }

        public ICategoryListPerso AddCategoryListPerso(ICategoryListPerso categoryListPerso)
        {
            throw new NotImplementedException();
        }

        public ICategoryListPerso DeleteCategoryListPerso(int id)
        {
            throw new NotImplementedException();
        }

        public ICategoryListPerso GetCategoryListPerso(int id)
        {
            return this.repo.GetCategoryListPerso(id);
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
