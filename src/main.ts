// --0--
// import { Order } from "./0_start_point";
// let order = new Order();
// order.add_item("Keyboard", 1, 50);
// order.add_item("SSD", 1, 150);
// order.add_item("USB cable", 2, 5);

// console.log(order.total_price());
// order.pay("debit", "0372846");

// --1-- single responsibility
// import { Order, PaymentProcessor } from "./1_single_responsibility";
// const order = new Order();
// order.add_item("Keyboard", 1, 50);
// order.add_item("SSD", 1, 150);
// order.add_item("USB cable", 2, 5);

// console.log(order.total_price());
// const processor = new PaymentProcessor();
// processor.pay_debit(order, "0372846");

// --2-- open closed
// import { Order, DebitPaymentProcessor } from "./2_open_closed";
// const order = new Order();
// order.add_item("Keyboard", 1, 50);
// order.add_item("SSD", 1, 150);
// order.add_item("USB cable", 2, 5);

// console.log(order.total_price());
// const processor = new DebitPaymentProcessor();
// processor.pay(order, "0372846");

// --3-- liskov substitution
// import { Order, PaypalPaymentProcessor } from "./3_liskov_substitution";
// const order = new Order();
// order.add_item("Keyboard", 1, 50);
// order.add_item("SSD", 1, 150);
// order.add_item("USB cable", 2, 5);

// console.log(order.total_price());
// const processor = new PaypalPaymentProcessor();
// processor.pay(order, "0372846");

// --4-- interface segregation inheritence
// import { Order, PaypalPaymentProcessor } from "./4_interface_segregation_inheritence";
// const order = new Order();
// order.add_item("Keyboard", 1, 50);
// order.add_item("SSD", 1, 150);
// order.add_item("USB cable", 2, 5);

// console.log(order.total_price());
// const processor = new PaypalPaymentProcessor("hi@arjancodes.com");
// processor.auth_sms(465839);
// processor.pay(order);

// --4-- interface segregation inheritence
import {
    Order,
    PaypalPaymentProcessor,
    SmsAuthorizer,
} from "./4_interface_segregation_segregate";
const order = new Order();
order.add_item("Keyboard", 1, 50);
order.add_item("SSD", 1, 150);
order.add_item("USB cable", 2, 5);

console.log(order.total_price());
const authorizer = new SmsAuthorizer();
authorizer.verify_code(465839);
const processor = new PaypalPaymentProcessor("hi@arjancodes.com", authorizer);
processor.pay(order);
