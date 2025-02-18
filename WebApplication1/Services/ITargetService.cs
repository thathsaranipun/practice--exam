using TargetsMasterAPI.Models;

namespace TargetsMasterAPI.Services
{
    public interface ITargetService
    {
        Task<IEnumerable<Target>> GetTargets(int page, int pageSize);
        Task<Target> GetTargetById(int id);
        Task AddTarget(Target target);
        Task UpdateTarget(Target target);
        Task DeleteTarget(int id);
    }
}
