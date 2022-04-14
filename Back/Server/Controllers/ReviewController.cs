using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService service;
        public ReviewController(IReviewService Service)
        {
            service = Service;
        }

        [HttpGet("{id}")]
        public IReview GetReview(int id)
        {
            return this.service.GetReview(id);
        }

        [HttpGet]
        public IEnumerable<IReview> GetReviews()
        {
            return this.service.GetReviews();
        }


        [HttpPost]
        public IReview AddReview(Review review)
        {
            return this.service.AddReview(review);
        }

        [HttpPut]
        public IReview UpdateReview(Review review)
        {
            return this.service.UpdateReview(review);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteReview(int id)
        {
            try
            {
                this.service.DeleteReview(id);
                return Ok("The review got deleted.");
            }
            catch (Exception e)
            {
                return BadRequest();
            }

        }
    }
}
