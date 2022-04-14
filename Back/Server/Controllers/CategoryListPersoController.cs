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
    public class CategoryListPersoController : ControllerBase
    {
        private readonly ICategoryListPersoService service;
        public CategoryListPersoController(ICategoryListPersoService Service)
        {
            service = Service;
        }

        [HttpGet("{id}")]
        public ICategoryListPerso GetCategoryListPerso(int id)
        {
            return this.service.GetCategoryListPerso(id);
        }

        [HttpGet]
        public IEnumerable<ICategoryListPerso> GetCategoryListPerso()
        {
            return this.service.GetCategoryListPersos();
        }
    }
}
