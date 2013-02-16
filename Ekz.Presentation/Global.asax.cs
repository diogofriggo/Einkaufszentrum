using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
//using Raven.Client;
//using Raven.Client.Document;
using Dpx.Presentation.Configuration;
using Dpx.Presentation.Controllers;

namespace Dpx.Presentation
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfiguration.Configure(GlobalFilters.Filters);
            RouteConfiguration.Configure(RouteTable.Routes);
            //RavenDbConfig.Configure();
        }
    }
}