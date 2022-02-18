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
            return this.repo.AddReview(review);
        }

        public void DeleteReview(int id)
        {
            this.repo.DeleteReview(id);
        }

        public IReview GetReview(int id)
        {
            return this.repo.GetReview(id);
        }

        public IEnumerable<IReview> GetReviews()
        {
            return this.repo.GetReviews();
        }

        public IReview UpdateReview(IReview review)
        {
            return this.repo.UpdateReview(review);
        }
    }
}
