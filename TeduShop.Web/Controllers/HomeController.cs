using AutoMapper;
using System.Collections.Generic;
using System.Web.Mvc;
using TeduShop.Common;
using TeduShop.Model.Models;
using TeduShop.Service;
using TeduShop.Web.Models;

namespace TeduShop.Web.Controllers
{
    public class HomeController : Controller
    {
        IProductCategoryService _productCategoryService;
        IProductService _productService;
        ICommonService _commonService;

        public HomeController(IProductCategoryService productCategoryService,
            IProductService productService,
            ICommonService commonService)
        {
            _productCategoryService = productCategoryService;
            _commonService = commonService;
            _productService = productService;
        }
        // GET: Home
        [OutputCache(Duration = 60, Location = System.Web.UI.OutputCacheLocation.Client)]
        public ActionResult Index()
        {
    
            var productModel = _productService.GetListProductByCategoryId(1, 4);
            ViewBag.viewproductIphone = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productModel);

            var productModel2 = _productService.GetListProductByCategoryId(2, 4);
            ViewBag.viewproductSamsung = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productModel2);
            var productModel3 = _productService.GetListProductByCategoryId(3, 4);
            ViewBag.viewproductOppo = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productModel3);
            var productModel4 = _productService.GetListProductByCategoryId(4, 4);
            ViewBag.viewproductXiaomi = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productModel4);

            var productModelHot = _productService.GetHotProduct(6);
            ViewBag.productModelHot = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productModelHot);
            var slideModel = _commonService.GetSlides();

            var slideView = Mapper.Map<IEnumerable<Slide>, IEnumerable<SlideViewModel>>(slideModel);
            var homeViewModel = new HomeViewModel();
            homeViewModel.Slides = slideView;

            var lastestProductModel = _productService.GetLastest(4);
            var topSaleProductModel = _productService.GetHotProduct(4);
            var lastestProductViewModel = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(lastestProductModel);
            var topSaleProductViewModel = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(topSaleProductModel);
            homeViewModel.LastestProducts = lastestProductViewModel;
            homeViewModel.TopSaleProducts = topSaleProductViewModel;
            

            try
            {
                homeViewModel.Title = _commonService.GetSystemConfig(CommonConstants.HomeTitle).ValueString;
                homeViewModel.MetaKeyword = _commonService.GetSystemConfig(CommonConstants.HomeMetaKeyword).ValueString;
                homeViewModel.MetaDescription = _commonService.GetSystemConfig(CommonConstants.HomeMetaDescription).ValueString;
            }
            catch
            {

            }

            return View(homeViewModel);
        }
        [ChildActionOnly]
        public ActionResult Footer()
        {
            return PartialView();
        }
        [ChildActionOnly]
        public ActionResult Header()
        {
            return PartialView();
        }

        [ChildActionOnly]
        [OutputCache(Duration = 3600)]
        public ActionResult Category()
        {
            var model = _productCategoryService.GetAll();
            var listProductCategoryViewModel = Mapper.Map<IEnumerable<ProductCategory>, IEnumerable<ProductCategoryViewModel>>(model);
            return PartialView(listProductCategoryViewModel);
        }


    }
}