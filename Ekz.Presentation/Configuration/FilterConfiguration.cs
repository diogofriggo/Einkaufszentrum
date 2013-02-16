using System.Web;
using System.Web.Mvc;

namespace Dpx.Presentation.Configuration
{
    public class FilterConfiguration
    {
        public static void Configure(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}