using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
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
    }
}
