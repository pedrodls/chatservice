using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ChatService.Application;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChatService.Models;

namespace ChatService.Controllers
{
    public class HomeController : Controller
    { 
        private readonly ILogger<HomeController> _logger;
        private readonly ChatContext _db;

        public HomeController()
        {
          

            
        }

        public IActionResult Index()
        {
            var teste = CriarToken.CriandoToken("Paulo");

            ViewBag.Teste = teste;

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
    }
}