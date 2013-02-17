using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Raven.Client.Document;
using Dpx.Presentation.Controllers;
using Raven.Client.Embedded;
using Raven.Database.Server;

namespace Dpx.Presentation.Configuration
{
    public static class RavenDbConfiguration
    {
        public static void Configure()
        {
            //NonAdminHttp.EnsureCanListenToWhenInNonAdminContext(8088);
            RavenController.Store = new DocumentStore 
            { 
                ConnectionStringName = "RavenDB"
            }.Initialize();
        }
    }
}
