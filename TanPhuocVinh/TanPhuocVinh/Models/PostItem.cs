using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TanPhuocVinh.Models
{
    public class PostItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Time { get; set; }
        public string Image { get; set; }
        public string Content { get; set; }
        public string Type { get; set; }
    }
}
