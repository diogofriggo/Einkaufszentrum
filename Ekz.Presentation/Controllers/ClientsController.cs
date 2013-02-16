using Ekz.Domain;
using Ekz.Presentation.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dpx.Presentation.Controllers
{
    public class ClientsController : RavenController
    {
        string[] names = new [] {
            "Angla Guillotte",
            "Anderson Sather",
            "Dean Magner",
            "Lamonica Crumbley",
            "Tula Mcpeek",
            "Shaunda Bianchi",
            "Charita Eddy",
            "Berneice Edman",
            "Sixta Flatt",
            "Eleanor Mckamie",
            "Anamaria Birney",
            "Laurence Kyllonen",
            "Raymundo Mcmanis",
            "Kassandra Bowers",
            "Mi Swords",
            "Tiffani Bolduc",
            "Yoshie Marceau",
            "Merlyn Wyse",
            "Anika Ravelo",
            "Rhea Vanhoy",
            "Alexa Herdt",
            "Johnsie Mcgowen",
            "Soo Hurla",
            "Chang Reiling",
            "Lessie Laver",
            "Marcella Liddle",
            "Madelyn Rigsby",
            "Aurelia Gladwin",
            "Jenette Ocegueda",
            "Sindy Carrillo",
            "Eunice Koh",
            "Alethea Vierling",
            "Fay Hodgson",
            "Darrin Rudloff",
            "Moira Pintor",
            "Domonique Mohamed",
            "Shavonne Hadnot",
            "Herta Levalley",
            "Wilma Vetrano",
            "Malorie Wimer",
            "Jonathon Yother",
            "Karena Mcafee",
            "Todd Salvato",
            "Selena Vivas",
            "Adele Royse",
            "Michael Krall",
            "Jefferey Sutera",
            "Fermina Otey",
            "Annita Baumbach",
            "Cordie Watley"
        };

        public JsonResult Index()
        {
            var clients = names.Select((x, i) => new Client { Id = i, Name = x });
            return Json(clients);
        }

        public JsonResult Populate()
        {
            names.ForEach((x, i) => Session.Store(new Client { Id = i, Name = x }));
            return Json(string.Empty);
        }
    }
}
