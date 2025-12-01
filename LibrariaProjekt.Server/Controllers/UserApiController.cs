using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserApiController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost("createUser")]
        public IActionResult CreateUser([FromBody] User user)
        {
            Console.WriteLine("Received: " + System.Text.Json.JsonSerializer.Serialize(user));
            if (user == null)
            {
                return BadRequest("User data is null.");
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _userRepository.Insert(user);
            _userRepository.Save();
            return Ok("User created successfully.");
        }
    }
}
