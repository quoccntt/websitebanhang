//using AutoMapper;
//using TeduShop.Model.Models;
//using TeduShop.Service;
//using TeduShop.Web.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using TeduShop.Web.Infrastructure.Core;

//namespace TeduShop.Api
//{
//    [RoutePrefix("api/order")]
//    [Authorize]
//    public class OrderController : ApiControllerBase
//    {
//        #region Initialize
//        private IOrderService _orderService;

//        public OrderController(IErrorService errorService, IOrderService orderService)
//            : base(errorService)
//        {
//            this._orderService = orderService;
//        }

//        #endregion
       
//        [Route("getbyid/{id:int}")]
//        [HttpGet]
//        public HttpResponseMessage GetById(HttpRequestMessage request, int id)
//        {
//            return CreateHttpResponse(request, () =>
//            {
//                var model = _orderService.GetById(id);

//                var responseData = Mapper.Map<Order, OrderViewModel>(model);

//                var response = request.CreateResponse(HttpStatusCode.OK, responseData);

//                return response;
//            });
//        }

//        [Route("getall")]
//        [HttpGet]
//        public HttpResponseMessage GetAll(HttpRequestMessage request, string keyword, int page, int pageSize = 20)
//        {
//            return CreateHttpResponse(request, () =>
//            {
//                int totalRow = 0;
//                var model = _orderService.GetAllOrder(keyword);

//                totalRow = model.Count();
//                var query = model.OrderByDescending(x => x.CreatedDate).Skip(page * pageSize).Take(pageSize);

//                var responseData = Mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(query);

//                var paginationSet = new PaginationSet<OrderViewModel>()
//                {
//                    Items = responseData,
//                    Page = page,
//                    TotalCount = totalRow,
//                    TotalPages = (int)Math.Ceiling((decimal)totalRow / pageSize)
//                };
//                var response = request.CreateResponse(HttpStatusCode.OK, paginationSet);
//                return response;
//            });
//        }

//    }
//}
