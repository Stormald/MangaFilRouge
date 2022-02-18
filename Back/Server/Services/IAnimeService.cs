using Server.Interfaces;
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
        IAnime AddAnime(IAnime anime);
        IAnime UpdateAnime(IAnime anime);
        void DeleteAnime(int id);
    }
}
