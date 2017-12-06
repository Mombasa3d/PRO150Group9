using PaintClicker.DatabaseModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PaintClicker.Controllers
{
    public class HomeController : Controller
    {
        //Port users to DB
        //Pass user
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult Save(int PaintChips, int Chisels, int Workers, int Mixer,string email)
        {


            Debug.Write($"\n\n\n\n\n\n Paint:  {PaintChips}  WE SOMEHOW MADE IT HERE\n" +
                $"Email: {email}" +
                $"" +
                $"\n\n\n\n\n");
            return new EmptyResult();
        }

        
    }
}