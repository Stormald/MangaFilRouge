using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;

namespace Server.Repositories.MariaDB
{
    public class ListPersoRepository : IListPersoRepository
    {
        private readonly mangafilrouge_bddContext context;
        public ListPersoRepository(mangafilrouge_bddContext Context)
        {
            context = Context;
        }

        public ListPerso AddListPerso(ListPerso listPerso)
        {
            this.context.ListPersos.Add(listPerso);
            Console.WriteLine(listPerso);
            this.context.SaveChanges();
            return listPerso;
        }

        //public void DeleteListPerso(int id)
        //{
        //    this.context.ListPersos.Remove(this.context.ListPersos.FirstOrDefault(e => e.Id == id));
        //}

        public IEnumerable<IListPerso> GetListsPerso()
        {
            return this.context.ListPersos.ToList();
        }

        public IListPerso UpdateListPerso(ListPerso listPerso)
        {
            this.context.ListPersos.Update(listPerso);
            this.context.SaveChanges();
            return listPerso;
        }
    }
}
