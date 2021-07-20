import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;

//user
/*
    {
        "name": "Basir",
        "email": "admin@example.com",
        "password": bcrypt.hashSync("1234", 8),
        "isAdmin": true,
        "isSeller": true,
        "seller": {
            "name": "Puma",
            "logo": "/images/logo1.png",
            "description": "best seller",
            "rating": 4.5,
            "numReviews": 120,
        }
    }
*/

//product
/*
    {
        "name": "Nike Slim Shirt",
        "category": "Shirts",
        "image": "/images/p1.jpg",
        "price": 120,
        "countInStock": 10,
        "brand": "Nike",
        "rating": 4.5,
        "numReviews": 10,
        "description": "high quality product"
    }
*/

//review
/*
    {
        "name": "NV A",
        "rating": 4,
        "comment": "very good"
    }
*/

//order
/*
    {
        "user": "60866af17879c3062ac80031",
        "seller": "60866af17879c3062ac80031",
        "orderItems": [
            {
                "name": "T-shirt",
                "qty": 2,
                "image": "/image/tShirt1",
                "price": 200,
                "product": "608671f996772a068533ed19"
            }
        ],
        "shipping": {
            "fullName": "Ship1",
            "address": "Bac Ninh",
            "city": "Bac Ninh",
            "postalCode": "64",
            "country": "Viet Nam"
        },
        "payment": {
            "paymentMethod": "Paypal",
            "paymentResult": {
                "payerID": "123",
                "orderID": "234",
                "paymentID": "345"
            }
        },
        "itemsPrice": 200,
        "taxPrice": 5, 
        "shippingPrice": 3,
        "totalPrice": 208,
        "isPaid": false,
        "paidAt": false,
        "isDelivered": false,
        "deliveredAt": "2021-04-26"
    }
*/

//pay order
/*
    {
        "payerID": "123",
        "paymentID": "234"
    }
*/

{
    "seller": {
        "cookie": "noidung",
        "email": "noidung",
        "vps_ip": "noidung",
        "vps_user_name": "noidung",
        "vps_password": "noidung",
        "proxy_text": "noidung",
        "proxy_type": "noidung",
        "status": 1,
        "order": [
            {
                "id_order": 1,
                "id_buyer": 1,
                "sku": "noidung",
                "total": 0.00,
                "sale_tax": 0.00,
                "item_sub_total": 0.00,
                "tracking": "noidung",
                "discount": 0.00,
                "date_sold": "2021-05-30",
                "date_paid": "2021-05-30",
                "date_shipped_nov": "2021-05-30",
                "shiping_price": 0.00,
                "ship_to": "noidung",
                "title_product": "noidung",
                "feedback_score": "noidung",
                "sale_record_number": "noidung",
                "shipping_method": "noidung",
                "name": "noidung",
                "email": "noidung",
                "phone": "noidung",
                "phone2": "noidung",
                "zip_code": "noidung",
                "city": "noidung",
                "street": "noidung",
                "country_region": "noidung",
                "state_rovince": "noidung"
            },
            {
                "id_order": 1,
                "id_buyer": 1,
                "sku": "noidung",
                "total": 0.00,
                "sale_tax": 0.00,
                "item_sub_total": 0.00,
                "tracking": "noidung",
                "discount": 0.00,
                "date_sold": "2021-05-30",
                "date_paid": "2021-05-30",
                "date_shipped_nov": "2021-05-30",
                "shiping_price": 0.00,
                "ship_to": "noidung",
                "title_product": "noidung",
                "feedback_score": "noidung",
                "sale_record_number": "noidung",
                "shipping_method": "noidung",
                "name": "noidung",
                "email": "noidung",
                "phone": "noidung",
                "phone2": "noidung",
                "zip_code": "noidung",
                "city": "noidung",
                "street": "noidung",
                "country_region": "noidung",
                "state_rovince": "noidung"
            }
        ]
    },
    "status_code":1,
    "message":"[Error Tool]: Lỗi cookie có thể đã hết hạn",
    "create_at":"09:09:09 20/12/2021"
}