using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TanPhuocVinh.Models
{
    public class PostItemContext : DbContext
    {
        public PostItemContext(DbContextOptions<PostItemContext> options)
            : base(options)
        {
        }

        public DbSet<PostItem> PostItems { get; set; }
    }
}
