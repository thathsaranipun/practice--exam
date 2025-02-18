using Microsoft.EntityFrameworkCore;
using TargetsMasterAPI.Models;

namespace TargetsMasterAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Target> Targets { get; set; }
        public DbSet<ChangeLog> ChangeLogs { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
