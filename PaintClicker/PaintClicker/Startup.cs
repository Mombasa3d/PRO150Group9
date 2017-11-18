using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PaintClicker.Startup))]
namespace PaintClicker
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
