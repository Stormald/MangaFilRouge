using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IAnimeService
    {
        IAnime GetAnime(int id);
        IEnumerable<IAnime> GetAnimes();
        IAnime AddAnime(Anime anime);
        IAnime UpdateAnime(Anime anime);
        void DeleteAnime(int id);
    }
}
