using LibrariaProjekt.Server.DTO;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminApiController : ControllerBase
    {
        private readonly IAdminRepository _adminRepository;
        private readonly IPasswordHasher<Admin> _passwordHasher;

        public AdminApiController(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
            _passwordHasher = new PasswordHasher<Admin>();
        }

        [HttpPost("loginAdmin")]
        public IActionResult LoginAdmin([FromBody] LoginDto dto)
        {
            if (dto == null)
                return BadRequest("Login data is null.");

            var admin = _adminRepository.GetByEmail(dto.Email);
            if (admin == null)
                return Unauthorized("Email or password incorrect.");

            var res = _passwordHasher.VerifyHashedPassword(admin, admin.Password, dto.Password);
            if (res == PasswordVerificationResult.Failed)
                return Unauthorized("Email or password incorrect.");

            return Ok(new
            {
                message = "Admin login successful",
                Id = admin.Id,
                Name = admin.Name,
                Email = admin.Email
            });
        }
    }
}
