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
            //NonAdminHttp.EnsureCanListenToWhenInNonAdminContext(8080);
            //DataDirectory = "App_Data"
            //UseEmbeddedHttpServer = true
            //ConnectionStringName = "RavenDBEmbedded"
            //ConnectionStringName = "RavenDBConsole"
            //ConnectionStringName = "RavenDBIIS"
            RavenController.Store = new DocumentStore 
            {
                ConnectionStringName = "RavenDBConsole"
            }.Initialize();
        }
    }
}
