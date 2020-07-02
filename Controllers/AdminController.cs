using System.Collections.Generic;
using System.Linq;
using ChatService.Application;
using ChatService.Models;
using Microsoft.AspNetCore.Mvc;

namespace ChatService.Controllers
{
    public class AdminController : Controller
    {
        private ChatContext _db;
        
        public IList<Message> Message { get; set; }
        // GET
        public AdminController(ChatContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}