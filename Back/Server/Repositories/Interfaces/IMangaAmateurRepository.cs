using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories.Interfaces
{
    public interface IMangaAmateurRepository
    {
        IMangaAmateur GetMangaAmateur(int id);
        IEnumerable<IMangaAmateur> GetMangaAmateurs();
        MangaAmateur AddMangaAmateur(MangaAmateur mangaAmateur);
        IMangaAmateur UpdateMangaAmateur(MangaAmateur mangaAmateur);
        void DeleteMangaAmateur(int id);

    }
}
