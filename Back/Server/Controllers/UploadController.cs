using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost("FrontPicture/{newFilename}"), DisableRequestSizeLimit]
        public IActionResult UploadFrontPicture(string newFilename)
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("assets", "Mangas-Amateurs");
                var pathUp = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), @"..\..\Front\src\"));
                var pathToSave = Path.Combine(pathUp, folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, newFilename);
                    var dbPath = Path.Combine(folderName, newFilename);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }


        [HttpPost("PathFolder/{folder}"), DisableRequestSizeLimit]
        public IActionResult UploadPathFolder(string folder)
        {
            try
            {
                var files = Request.Form.Files;
                var folderName = Path.Combine("assets", "Mangas-Amateurs", folder);
                var pathUp = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), @"..\..\Front\src\"));
                var pathToSave = Path.Combine(pathUp, folderName);
                if (files.Any(f => f.Length == 0))
                {
                    return BadRequest();
                }
                foreach (var file in files)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    Directory.CreateDirectory(pathToSave);
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName); //you can add this path to a list and then return all dbPaths to the client if require
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return Ok("All the files are successfully uploaded.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
