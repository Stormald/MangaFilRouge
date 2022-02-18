using Server.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories.Interfaces
{
    public interface IReviewRepository
    {
        IReview GetReview(int id);
        IEnumerable<IReview> GetReviews();
        IReview AddReview(IReview review);
        IReview UpdateReview(IReview review);
        IReview DeleteReview(int id);

    }
}
