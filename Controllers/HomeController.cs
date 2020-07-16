using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ChatService.Application;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChatService.Models;
using Jose;
using System.Collections;
using System.IO;
using System.Text.Unicode;

namespace ChatService.Controllers
{
    public class HomeController : Controller
    {
        public string teste = "";

        private readonly ILogger<HomeController> _logger;
        private readonly ChatContext _db;

        public HomeController()
        {

        }

        public IActionResult Index()
        {

            var r = Request.Cookies["token"];

            if (r != null)
            {
                string decToken = JWT.Decode(r, CriarToken.secretKey, JwsAlgorithm.HS256).ToString();
                string date = decToken.Substring(10, 19);
                DateTime exp = DateTime.Parse(date);

                if (DateTime.Now.Date > exp.Date)
                {
                    teste = CriarToken.CriandoToken("Paulo");
                    Response.Cookies.Append("token", teste);

                }
                else teste = r;

            }
            else
            {
                teste = CriarToken.CriandoToken("Paulo");

                Response.Cookies.Append("token", teste);

            }
            

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