using LibrariaProjekt.Server.DTO;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher<User> _passwordHasher;

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
            user.Password = _passwordHasher.HashPassword(user, dto.Password);

            _userRepository.Insert(user);
            _userRepository.Save();

            return Ok("User created successfully.");
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {

            if (dto == null)
            {
                return BadRequest("User data is null.");
            }

            var user = _userRepository.GetByEmail(dto.Email);

            if (user == null)
            {
                return Unauthorized("Email or password incorrect.");
            }
            var res = _passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);

            if (res == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Email or password incorrect.");
            }


            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim("Id", user.Id.ToString())
            };


            var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

            var authProperties = new AuthenticationProperties
            {
                IsPersistent = true,
                ExpiresUtc = DateTimeOffset.UtcNow.AddDays(7)
            };

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity),
                authProperties);



            return Ok(new
            {
                message = "Login successful.",
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
            });
        }

        [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
        [HttpGet("status")]
        public IActionResult CheckStatus()
        {
            var userId = User.FindFirst("Id")?.Value;
            var name = User.FindFirst(ClaimTypes.Name)?.Value;
            var email = User.FindFirst(ClaimTypes.Email)?.Value;
            if (userId == null || name == null || email == null)
            {
                return Unauthorized("User is not authenticated.");
            }
            return Ok(new
            {
                message = "User is authenticated.",
                Id = userId,
                Name = name,
                Email = email
            });
        }



        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(
                CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok("Logout successful.");
        }
    }
}
