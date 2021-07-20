import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import {
  mailgun,
  payOrderEmailTemplate,
} from '../build/sendMail.js';

const getOrders = async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
};

const thongKeOrder = async (req, res) => { 
  const orders = await Order.aggregate([
    {
      $group: {
        _id: null,
        numOrders: { $sum: 1 },
        totalSales: { $sum: '$totalPrice' },
      },
    },
  ]);
  const users = await User.aggregate([
    {
      $group: {
        _id: null,
        numUsers: { $sum: 1 },
      },
    },
  ]);
  const dailyOrders = await Order.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        orders: { $sum: 1 },
        sales: { $sum: '$totalPrice' },
      },
    },
    { $sort: { _id: 1 } },
  ]);
  const productCategories = await Product.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
  ]);
  res.send({ users, orders, dailyOrders, productCategories });
};
  
const getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
};

const getOrder = async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
      res.send(order);
    } else {
      res.status(404).send("Order Not Found.")
    }
};

const deleteOrder = async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
      const deletedOrder = await order.remove();
      res.send(deletedOrder);
    } else {
      res.status(404).send("Order Not Found.")
    }
};

const createOrder = async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping, 
      payment: req.body.payment,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res.status(201).send({ message: "New Order Created", data: newOrderCreated });
};

const payOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) { 
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment = {
        paymentMethod: 'paypal',
        paymentResult: {
          payerID: req.body.payerID,
          orderID: order._id,
          paymentID: req.body.paymentID
        }
      }
      const updatedOrder = await order.save();
      const user = await User.findById(order.user);
      if(user) {
        mailgun()
        .messages()
        .send(
          {
            from: 'Amazona <tqcaoson@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: `New order ${order._id}`,
            html: payOrderEmailTemplate(order, user),
          },
          (error, body) => {
            if (error) {
              console.log(error);
            } else {
              console.log(body);
            }
          }
        );
      } else {
        res.send({ message: 'Order Paid but email does not exist.', order: updatedOrder });
      }
      res.send({ message: 'Order Paid.', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order not found.' })
    }
};

const deliverOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.send({ message: 'Order Delivered', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
};
  
export { 
  getOrders, 
  thongKeOrder,
  getMyOrders, 
  getOrder, 
  deleteOrder, 
  createOrder, 
  payOrder,
  deliverOrder };
  