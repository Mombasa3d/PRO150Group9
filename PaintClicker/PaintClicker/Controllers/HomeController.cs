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
        public ActionResult Index()
        {
            return View();
        }

        
        public bool Save(string PaintChips, string Chisels, string Workers, string Mixer)
        {


            Debug.Write($"\n\n\n\n\n\n Paint:  {PaintChips}  WE SOMEHOW MADE IT HERE\n\n\n\n\n\n");
            return true;
        }

        
    }
}