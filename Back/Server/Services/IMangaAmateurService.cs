using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IMangaAmateurService
    {
        IMangaAmateur GetMangaAmateur(int id);
        IEnumerable<IMangaAmateur> GetMangaAmateurs();
        IMangaAmateur AddMangaAmateur(MangaAmateur mangaAmateur);
        IMangaAmateur UpdateMangaAmateur(MangaAmateur mangaAmateur);
        void DeleteMangaAmateur(int id);
    }
}
