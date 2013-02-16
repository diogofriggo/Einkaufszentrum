using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ekz.Presentation.Extensions
{
    public static class EnumerableExtensions
    {
        public static void ForEach<T>(this IEnumerable<T> enumerable, Action<T> action)
        {
            foreach (var item in enumerable)
            {
                action(item);
            }
        }

        public static void ForEach<T>(this IEnumerable<T> enumerable, Action<T,int> action) 
        {
            for (int index = 0; index < enumerable.Count(); index++)
            {
                var item = enumerable.ElementAt(index);
                action(item, index);
            }
        }
    }
}