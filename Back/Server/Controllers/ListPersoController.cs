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
    public class ListPersoController : ControllerBase
    {
        private readonly IListPersoService service;
        public ListPersoController(IListPersoService listPersoService)
        {
            service = listPersoService;
        }

        [HttpGet]
        public IEnumerable<IListPerso> GetListsPerso()
        {
            return this.service.GetListsPerso();
        }


        [HttpPost]
        public IListPerso AddListPerso(ListPerso listPerso)
        {
            return this.service.AddListPerso(listPerso);
        }

        [HttpPut]
        public IListPerso UpdateListPerso(ListPerso listPerso)
        {
            return this.service.UpdateListPerso(listPerso);
        }

        //[HttpDelete("{id}")]
        //public IActionResult DeleteListPerso(int id)
        //{
        //    try
        //    {
        //        this.service.DeleteListPerso(id);
        //        return Ok("The list got deleted.");
        //    }
        //    catch (Exception e)
        //    {
        //        return BadRequest();
        //    }

        //}
    }
}
