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
    public class MangaAmateurController : ControllerBase
    {
        private readonly IMangaAmateurService service;
        public MangaAmateurController(IMangaAmateurService Service)
        {
            service = Service;
        }

        [HttpGet("{id}")]
        public IMangaAmateur GetMangaAmateur(int id)
        {
            return this.service.GetMangaAmateur(id);
        }

        [HttpGet]
        public IEnumerable<IMangaAmateur> GetMangaAmateurs()
        {
            return this.service.GetMangaAmateurs();
        }


        [HttpPost]
        public IMangaAmateur AddMangaAmateur(MangaAmateur mangaAmateur)
        {
            return this.service.AddMangaAmateur(mangaAmateur);
        }

        [HttpPut]
        public IMangaAmateur UpdateMangaAmateur(MangaAmateur mangaAmateur)
        {
            return this.service.UpdateMangaAmateur(mangaAmateur);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMangaAmateur(int id)
        {
            try
            {
                this.service.DeleteMangaAmateur(id);
                return Ok("The mangaAmateur got deleted.");
            }
            catch (Exception e)
            {
                return BadRequest();
            }

        }
    }
}
