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
        //Pass user
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult Save(int PaintChips, int Chisels, int Workers, int Mixers,string Name)
        {
            using (var db = new WebClickerGameEntities())
            {
                Player user = db.Players.Find(Name);

                user.PaintChips = PaintChips;
                //user.PaintChunks = PaintChunks;
                user.Mixers = Mixers;
                user.Workers = Workers;
                user.Chisels = Chisels;
                db.SaveChanges();

            }
                Debug.Write($"\n\n" +
                    $"WE SOMEHOW MADE IT HERE\n" +
                    $"Paint: {PaintChips}\n" +
                    $"Name: {Name}\n" +
                    $"Chisels: {Chisels}\n" +
                    $"Workers: {Workers}\n" +
                    $"Mixer: {Mixers}\n" +
                    $"\n\n");
            return new EmptyResult();
        }

        
    }
}