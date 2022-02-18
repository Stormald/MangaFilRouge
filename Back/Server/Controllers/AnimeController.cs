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
    public class AnimeController : ControllerBase
    {
        private readonly IAnimeService service;
        public AnimeController(IAnimeService Service)
        {
            service = Service;
        }

        [HttpGet("{id}")]
        public IAnime GetAnime(int id)
        {
            return this.service.GetAnime(id);
        }

        [HttpGet]
        public IEnumerable<IAnime> GetAnimes()
        {
            return this.service.GetAnimes();
        }


        [HttpPost]
        public IAnime AddAnime(IAnime anime)
        {
            return this.service.AddAnime(anime);
        }

        [HttpPut]
        public IAnime UpdateAnime(IAnime anime)
        {
            return this.service.UpdateAnime(anime);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAnime(int id)
        {
            try
            {
                this.service.DeleteAnime(id);
                return Ok("The anime got deleted.");
            }
            catch (Exception e)
            {
                return BadRequest();
            }

        }
    }
}
