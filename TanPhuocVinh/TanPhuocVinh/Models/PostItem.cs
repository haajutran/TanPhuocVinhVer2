using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TanPhuocVinh.Models
{
    public class PostItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        
        [DisplayFormatAttribute(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Time { get; set; }
        public string Image { get; set; }
        public string Content { get; set; }
        public string Type { get; set; }
    }
}
