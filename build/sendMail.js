import mg from 'mailgun-js';

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

const payOrderEmailTemplate = (order) => {
  return `
        <h1>Thanks for shopping with us</h1>
        <p>
        Hi ${user.name},
        </p>
        <p>We have finished processing your order.</p>
        <h2>[Order ${order._id}] (${order.createdAt.toString().substring(0, 10)})</h2>
        <table>
        <thead>
            <tr>
                <td><strong>Product</strong></td>
                <td><strong>Quantity</strong></td>
                <td><strong align="right">Price</strong></td>
        </thead>
        <tbody>
            ${order.orderItems
            .map(
            (item) => `
            <tr>
                <td>${item.name}</td>
                <td align="center">${item.qty}</td>
                <td align="right"> $${item.price}</td>
            </tr>
            `
            )
            .join('\n')}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">Items Price:</td>
                <td align="right"> $${order.itemsPrice.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="2">Tax Price:</td>
                <td align="right"> $${order.taxPrice.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="2">Shipping Price:</td>
                <td align="right"> $${order.shippingPrice.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Total Price:</strong></td>
                <td align="right"><strong> $${order.totalPrice.toFixed(2)}</strong></td>
            </tr>
            <tr>
                <td colspan="2">Payment Method:</td>
                <td align="right">${order.paymentMethod}</td>
            </tr>
        </table>
        <h2>Shipping address</h2>
        <p>
        ${order.shipping.fullName},<br/>
        ${order.shipping.address},<br/>
        ${order.shipping.city},<br/>
        ${order.shipping.country},<br/>
        ${order.shipping.postalCode}<br/>
        </p>
        <hr/>
        <p>
        Thanks for shopping with us.
        </p>
  `;
};

export { mailgun, payOrderEmailTemplate };