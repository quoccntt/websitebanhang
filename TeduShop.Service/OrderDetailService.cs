//using biggShop.Data.Infrastructure;
//using biggShop.Data.Repositories;
//using biggShop.Model.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace biggShop.Service
//{
//    // fix for OrderDetail bussiness
//    public interface IOrderService
//    {
//        IEnumerable<OrderDetail> GetAll();
//        Order GetById(int id);
//        IEnumerable<OrderDetail> GetByOrderID(int orderID);
//        IEnumerable<Order> GetAllOrder(string keyword);
//        IEnumerable<OrderDetail> GetByShopID(int shopID);
//        IEnumerable<OrderDetail> GetByCustomerID(int userID);
//        bool Create(Order order, List<OrderDetail> orderDetails);
//        IEnumerable<Order> GetByUserName(string userName);
//        void Save();
//    }
//    public class OrderService : IOrderService
//    {
//        IOrderRepository _orderRepository;
//        IOrderDetailRepository _orderDetailRepository;
//        IUnitOfWork _unitOfWork;

//        public OrderService(IOrderRepository orderRepository, IOrderDetailRepository orderDetailRepository, IUnitOfWork unitOfWork)
//        {
//            this._orderRepository = orderRepository;
//            this._orderDetailRepository = orderDetailRepository;
//            this._unitOfWork = unitOfWork;
//        }

//        public IEnumerable<Order> GetByUserName(string userName)
//        {
//            var temp = _orderRepository.GetMulti(x => x.CreatedBy == userName);
//            return temp;
//        }


//        public bool Create(Order order, List<OrderDetail> orderDetails)
//        {
//            try
//            {
//                _orderRepository.Add(order);
//                _unitOfWork.Commit();

//                foreach (var orderDetail in orderDetails)
//                {
//                    orderDetail.OrderID = order.ID;
//                    _orderDetailRepository.Add(orderDetail);
//                }
//                return true;
//            }
//            catch (Exception ex)
//            {
//                throw;
//            }
//        }

//        public IEnumerable<OrderDetail> GetAll()
//        {
//            return _orderDetailRepository.GetAll();
//        }


//        public IEnumerable<Order> GetAllOrder(string keyword)
//        {
//            if (!string.IsNullOrEmpty(keyword))
//                return _orderRepository.GetMulti(x => x.CustomerName.Contains(keyword)
//                || x.CustomerAddress.Contains(keyword) || x.CustomerMobile.Contains(keyword));
//            else
//                return _orderRepository.GetAll();
//        }

//        public IEnumerable<OrderDetail> GetByOrderID(int orderID)
//        {
//            return _orderDetailRepository.GetMulti(x => x.OrderID == orderID);
//        }

//        public IEnumerable<OrderDetail> GetByCustomerID(int userID)
//        {
//            var orders = _orderRepository.GetMulti(x => x.CustomerId == userID.ToString());
//            List<OrderDetail> orderDetails = new List<OrderDetail>();
//            foreach (var order in orders)
//            {
//                orderDetails.AddRange(GetByOrderID(order.ID));
//            }
//            return orderDetails;
//        }

//        public IEnumerable<OrderDetail> GetByShopID(int shopID)
//        {
//            var orders = _orderRepository.GetMulti(x => x.ShopID == shopID);
//            List<OrderDetail> orderDetails = new List<OrderDetail>();
//            foreach (var order in orders)
//            {
//                orderDetails.AddRange(GetByOrderID(order.ID));
//            }
//            return orderDetails;
//        }

//        public void Save()
//        {
//            _unitOfWork.Commit();
//        }

//        public Order GetById(int id)
//        {
//            return _orderRepository.GetSingleById(id);
//        }
//    }
//}
