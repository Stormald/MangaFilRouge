using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Models;
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
            return (IReview)this.context.Reviews.Add(review as Review);
        }

        public void DeleteReview(int id)
        {
            this.context.Reviews.Remove(this.context.Reviews.FirstOrDefault(e => e.Id == id));
        }

        public IReview GetReview(int id)
        {
            return this.context.Reviews.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<IReview> GetReviews()
        {
            return this.context.Reviews.ToList();
        }

        public IReview UpdateReview(IReview review)
        {
            return (IReview)this.context.Reviews.Update(review as Review);
        }
    }
}
