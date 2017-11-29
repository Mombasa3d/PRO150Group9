using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Timers;
using PaintClicker.Models;
using PaintClicker.DatabaseModels;

namespace PaintClicker.Controllers
{
	public class PlayerEngine
	{
		public WebClickerGameEntities Players { get; set; } = new WebClickerGameEntities();
		public void SavePlayer(Playe p)
		{
			if (Players.Playes.Any(player => player.Email == p.Email)) //The player exists in our system.
			{
				Playe permenant = Players.Playes.Where(player => player.Email == p.Email).Single();
				permenant.Name = p.Name;
				permenant.PaintChips = p.PaintChips;
				permenant.PaintChuncks = p.PaintChuncks;
				permenant.Workers = p.Workers;
				permenant.Chisels = p.Chisels;

				Players.Entry(permenant).State = System.Data.Entity.EntityState.Modified;
			}
			else //The player does not exist in our system
			{
				Players.Playes.Add(p);
				Players.Entry(p).State = System.Data.Entity.EntityState.Added;
			}

			Players.SaveChanges();
		}
	}
}