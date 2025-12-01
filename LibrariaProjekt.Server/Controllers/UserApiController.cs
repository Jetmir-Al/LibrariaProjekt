using LibrariaProjekt.Server.DTO;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity; 

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher<User> _passwordHasher; // Pjesa per hash

        public UserApiController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _passwordHasher = new PasswordHasher<User>(); 
        }

        [HttpPost("createUser")]
        public IActionResult CreateUser([FromBody] CreateUserDto dto)
        {
            if (dto == null)
                return BadRequest("User data is null.");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                CreatedAt = DateTime.Now
            };

            // HASH PASSWORD
            user.Password = _passwordHasher.HashPassword(user, dto.Password);

            _userRepository.Insert(user);
            _userRepository.Save();

            return Ok("User created successfully.");
        }
    }
}
