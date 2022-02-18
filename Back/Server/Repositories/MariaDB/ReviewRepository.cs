using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Repositories.Interfaces;

namespace Server.Repositories.MariaDB
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly mangafilrouge_bddContext context;
        public ReviewRepository(mangafilrouge_bddContext Context)
        {
            context = Context;
        }

        public IReview AddReview(IReview review)
        {
            return null;
        }

        public IReview DeleteReview(int id)
        {
            throw new NotImplementedException();
        }

        public IReview GetReview(int id)
        {
            return context.Reviews.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<IReview> GetReviews()
        {
            throw new NotImplementedException();
        }

        public IReview UpdateReview(IReview review)
        {
            throw new NotImplementedException();
        }
    }
}
