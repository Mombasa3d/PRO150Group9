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
		public void SavePlayer(Player p)
		{
			if (Players.Players.Any(player => player.Name == p.Name)) //The player exists in our system.
			{
				Player permenant = Players.Players.Where(player => player.Name== p.Name).Single();
				permenant.Name = p.Name;
				permenant.PaintChips = p.PaintChips;
				permenant.PaintChunks = p.PaintChunks;
				permenant.Workers = p.Workers;
				permenant.Chisels = p.Chisels;

				Players.Entry(permenant).State = System.Data.Entity.EntityState.Modified;
			}
			else //The player does not exist in our system
			{
				Players.Players.Add(p);
				Players.Entry(p).State = System.Data.Entity.EntityState.Added;
			}

			Players.SaveChanges();
		}
	}
}