using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Deal_Management_System_API.Model
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options) { }
        public DbSet<Deal> Deals
        {
            get;
            set;
        }
        public DbSet<Hotel> Hotels
        {
            get;
            set;
        }
    }

}
