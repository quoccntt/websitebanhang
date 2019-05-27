using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TeduShop.Web.Models
{
    public class OrderDetailViewModel
    {
        public int OrderID { set; get; }

        public int ProductID { set; get; }
        public decimal Price { get; set; }

        [MaxLength(256)]
        public string NameProduct { get; set; }

        public int Quantitty { set; get; }
    }
}