using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Timers;

namespace PaintClicker.Controllers
{
	public static class CurrencyEngine
	{
		public static Timer Clock { get; set; } = new Timer();

		static CurrencyEngine()
		{
			Clock.Interval = 16.66667;
			Clock.Start();
		}
	}
}