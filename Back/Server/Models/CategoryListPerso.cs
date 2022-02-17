using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class CategoryListPerso : ICategoryListPerso
    {
        public CategoryListPerso()
        {
            ListPersos = new HashSet<ListPerso>();
        }

        public int Id { get; set; }
        public string Label { get; set; }

        public virtual ICollection<ListPerso> ListPersos { get; set; }
    }
}
