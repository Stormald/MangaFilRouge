using Server.Interfaces;
using Server.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository repo;
        public ReviewService(IReviewRepository Repo)
        {
            repo = Repo;
        }

        public IReview AddReview(IReview review)
        {
            throw new NotImplementedException();
        }

        public IReview DeleteReview(int id)
        {
            throw new NotImplementedException();
        }

        public IReview GetReview(int id)
        {
            return this.repo.GetReview(id);
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
