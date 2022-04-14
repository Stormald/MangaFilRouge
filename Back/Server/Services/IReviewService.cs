using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IReviewService
    {
        IReview GetReview(int id);
        IEnumerable<IReview> GetReviews();
        IReview AddReview(Review review);
        IReview UpdateReview(Review review);
        void DeleteReview(int id);
    }
}
