using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NETCore6_React.Models;
using System.Diagnostics.Contracts;

namespace NETCore6_React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly DepartmentDBContext _dbContext;

        public DepartmentController(DepartmentDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetDepartments")]
        public async Task<IActionResult> GetDepartments()
        {
            List<Department> lista = await _dbContext.Departments.OrderByDescending(c => c.IdDepartment).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("SaveDepartment")]
        public async Task<IActionResult> SaveDepartment([FromBody] Department request)
        {
            await _dbContext.Departments.AddAsync(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("EditDepartment")]
        public async Task<IActionResult> EditDepartment([FromBody] Department request)
        {
            _dbContext.Departments.Update(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("DeleteDepartment/{id:int}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            Department department = _dbContext.Departments.Find(id);

            _dbContext.Departments.Remove(department);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}
