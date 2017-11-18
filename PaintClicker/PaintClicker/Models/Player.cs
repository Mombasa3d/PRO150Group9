using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PaintClicker.Models
{
	public class Player
	{
		public DateTime Genesis { get; set; }
		public string Name { get; set; }
		public int PaintChips { get; set; }
		public int PaintChunks { get; set; }
		public int Chisels { get; set; }
		public int Workers { get; set; }

		public Player(string name, DateTime genesis)
		{
			Genesis = genesis;
			Name = name;
			Controllers.CurrencyEngine.Clock.Elapsed += Clock_Elapsed;
		}

		private void Clock_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
		{
			PassiveTick();
		}

		public void Click()
		{
			float incriment = 1;

			incriment += Chisels * 0.5f;

			PaintChips += (int)incriment;
		}

		public void PassiveTick()
		{
			float incriment = 1;

			incriment += 1 * Workers;

			PaintChips += (int)incriment;
		}

		public void CalculateFromGenesis()
		{

		}
	}
}