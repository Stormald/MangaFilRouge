using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories.Interfaces
{
    public interface IAnimeRepository
    {
        Anime GetAnime(int id);
        IEnumerable<Anime> GetAnimes();
        Anime AddAnime(Anime anime);
        Anime UpdateAnime(Anime anime);
        void DeleteAnime(int id);

    }
}
