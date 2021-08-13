// --0--
import { Order } from "./0_start_point";
const order = new Order();
order.addItem("Keyboard", 1, 50);
order.addItem("SSD", 1, 150);
order.addItem("USB cable", 2, 5);

console.log(order.totalPrice());
order.pay("debit", "0372846");

// --1-- single responsibility
// import { Order, PaymentProcessor } from "./1_single_responsibility";
// const order = new Order();
// order.addItem("Keyboard", 1, 50);
// order.addItem("SSD", 1, 150);
// order.addItem("USB cable", 2, 5);

// console.log(order.totalPrice());
// const processor = new PaymentProcessor();
// processor.payDebit(order, "0372846");

// --2-- open closed
// import { Order, DebitPaymentProcessor, PaymentProcessor } from "./2_open_closed";
// const order = new Order();
// order.addItem("Keyboard", 1, 50);
// order.addItem("SSD", 1, 150);
// order.addItem("USB cable", 2, 5);

// console.log(order.totalPrice());
// const processor: PaymentProcessor = new DebitPaymentProcessor();
// processor.pay(order, "0372846");

// --3-- liskov substitution
// import { Order, PaypalPaymentProcessor, PaymentProcessor } from "./3_liskov_substitution";
// const order = new Order();
// order.addItem("Keyboard", 1, 50);
// order.addItem("SSD", 1, 150);
// order.addItem("USB cable", 2, 5);

// console.log(order.totalPrice());
// const processor: PaymentProcessor = new PaypalPaymentProcessor("my@email.com");
// processor.pay(order);

// --4-- interface segregation inheritence
// import { Order, PaypalPaymentProcessor } from "./4_interface_segregation_inheritence";
// const order = new Order();
// order.addItem("Keyboard", 1, 50);
// order.addItem("SSD", 1, 150);
// order.addItem("USB cable", 2, 5);

// console.log(order.totalPrice());
// const processor: PaymentProcessor = new PaypalPaymentProcessor("hi@arjancodes.com");
// processor.authSms(465839);
// processor.pay(order);

// --4-- interface segregation inheritence
// import {
//     Order,
//     PaymentProcessor,
//     PaypalPaymentProcessor,
//     SmsAuthorizer,
// } from "./4_interface_segregation_segregate";
// const order = new Order();
// order.addItem("Keyboard", 1, 50);
// order.addItem("SSD", 1, 150);
// order.addItem("USB cable", 2, 5);

// console.log(order.totalPrice());
// const authorizer = new SmsAuthorizer();
// authorizer.verifyCode(465839);
// const processor: PaymentProcessor = new PaypalPaymentProcessor("hi@arjancodes.com", authorizer);
// processor.pay(order);

// --5-- interface segregation inheritence
// import {
//     Order,
//     PaymentProcessor,
//     PaypalPaymentProcessor,
//     RobotAuthorizer,
//     Authorizer, 
// } from "./5_dependency_inversion";
// const order = new Order();
// order.addItem("Keyboard", 1, 50);
// order.addItem("SSD", 1, 150);
// order.addItem("USB cable", 2, 5);

// console.log(order.totalPrice());
// const authorizer: Authorizer = new RobotAuthorizer();
// authorizer.notRobot();
// const processor: PaymentProcessor = new PaypalPaymentProcessor("hi@arjancodes.com", authorizer);
// processor.pay(order);
