using TargetsMasterAPI.Models;
using TargetsMasterAPI.Repositories;

namespace TargetsMasterAPI.Services
{
    public class TargetService : ITargetService
    {
        private readonly ITargetRepository _repository;

        public TargetService(ITargetRepository repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<Target>> GetTargets(int page, int pageSize) => _repository.GetTargets(page, pageSize);
        public Task<Target> GetTargetById(int id) => _repository.GetTargetById(id);
        public Task AddTarget(Target target) => _repository.AddTarget(target);
        public Task UpdateTarget(Target target) => _repository.UpdateTarget(target);
        public Task DeleteTarget(int id) => _repository.DeleteTarget(id);
    }
}
