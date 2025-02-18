using Microsoft.EntityFrameworkCore;
using TargetsMasterAPI.Data;
using TargetsMasterAPI.Models;

namespace TargetsMasterAPI.Repositories
{
    public class TargetRepository : ITargetRepository
    {
        private readonly AppDbContext _context;

        public TargetRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Target>> GetTargets(int page, int pageSize)
        {
            return await _context.Targets.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<Target> GetTargetById(int id)
        {
            return await _context.Targets.FindAsync(id);
        }

        public async Task AddTarget(Target target)
        {
            _context.Targets.Add(target);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTarget(Target target)
        {
            _context.Entry(target).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTarget(int id)
        {
            var target = await _context.Targets.FindAsync(id);
            if (target != null)
            {
                _context.Targets.Remove(target);
                await _context.SaveChangesAsync();
            }
        }
    }
}
