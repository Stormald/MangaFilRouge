using Server.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Server.Models
{
    public partial class Manga : IManga
    {
        public int Id { get; set; }
    }
}
