using Microsoft.AspNetCore.Mvc;
using TargetsMasterAPI.Models;
using TargetsMasterAPI.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TargetsMasterAPI.Controllers
{
    [ApiController]
    [Route("api/v1/targets")]
    public class TargetsController : ControllerBase
    {
        private readonly ITargetService _service;

        // Constructor injection of ITargetService
        public TargetsController(ITargetService service)
        {
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }

        // Get paginated targets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Target>>> GetTargets(int page = 1, int pageSize = 10)
        {
            var targets = await _service.GetTargets(page, pageSize);
            if (targets == null || !targets.Any())
            {
                return NotFound("No targets found.");
            }
            return Ok(targets);
        }

        // Get a specific target by its ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Target>> GetTarget(int id)
        {
            var target = await _service.GetTargetById(id);
            if (target == null)
            {
                return NotFound($"Target with ID {id} not found.");
            }
            return Ok(target);
        }

        // Create a new target
        [HttpPost]
        public async Task<ActionResult<Target>> CreateTarget(Target target)
        {
            if (target == null)
            {
                return BadRequest("Target cannot be null.");
            }

            await _service.AddTarget(target);

            // Return a CreatedAtAction response, which gives the URL of the new resource
            return CreatedAtAction(nameof(GetTarget), new { id = target.Id }, target);
        }

        // Update an existing target
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTarget(int id, Target target)
        {
            if (id != target.Id)
            {
                return BadRequest("ID mismatch.");
            }

            var existingTarget = await _service.GetTargetById(id);
            if (existingTarget == null)
            {
                return NotFound($"Target with ID {id} not found.");
            }

            await _service.UpdateTarget(target);

            // Return NoContent to indicate successful update without returning content
            return NoContent();
        }

        // Delete a target by its ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarget(int id)
        {
            var target = await _service.GetTargetById(id);
            if (target == null)
            {
                return NotFound($"Target with ID {id} not found.");
            }

            await _service.DeleteTarget(id);

            // Return NoContent to indicate successful deletion without returning content
            return NoContent();
        }
    }
}
