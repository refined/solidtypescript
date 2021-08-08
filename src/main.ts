// import { Order } from "./1_single_responsibility_before";

// let order = new Order();
// order.add_item("Keyboard", 1, 50);
// order.add_item("SSD", 1, 150);
// order.add_item("USB cable", 2, 5);

// console.log(order.total_price());
// order.pay("debit", "0372846");

import { Order, PaymentProcessor } from "./1_single_responsibility_after";
const order = new Order();
order.add_item("Keyboard", 1, 50);
order.add_item("SSD", 1, 150);
order.add_item("USB cable", 2, 5);

console.log(order.total_price());
const processor = new PaymentProcessor();
processor.pay_debit(order, "0372846");
