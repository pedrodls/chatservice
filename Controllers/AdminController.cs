using Microsoft.AspNetCore.Mvc;

namespace ChatService.Controllers
{
    public class AdminController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}