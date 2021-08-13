export class Order {
    private readonly items = [];
    private readonly quantities = [];
    private readonly prices = [];
    public status = "open";

    public addItem(name: string, quantity: number, price: number): void {
        this.items.push(name);
        this.quantities.push(quantity);
        this.prices.push(price);
    }

    public totalPrice(): number {
        let total = 0;
        for (const i in this.prices) {
            total += this.quantities[i] * this.prices[i];
        }
        return total;
    }
}

export interface PaymentProcessor {
    pay(order: Order): void;
}

export interface PaymentProcessorSms extends PaymentProcessor {
    authSms(code: number): void;
}

export class DebitPaymentProcessor implements PaymentProcessorSms {
    private verified = false;

    constructor(private readonly securityCode: string) {}

    public authSms(code: number): void {
        console.log(`Verifying SMS code ${code}`);
        this.verified = true;
    }

    public pay(order: Order): void {
        if (this.verified === false) throw new Error("Not authorized");
        console.log("Processing debit payment type");
        console.log(`Verifying security code: ${this.securityCode}`);
        order.status = "paid";
    }
}

export class CreditPaymentProcessor implements PaymentProcessor {
    constructor(private readonly securityCode: string) {}

    public pay(order: Order): void {
        console.log("Processing credit payment type");
        console.log(`Verifying security code: ${this.securityCode}`);
        order.status = "paid";
    }
}

export class PaypalPaymentProcessor implements PaymentProcessorSms {
    private verified = false;

    constructor(private readonly emailAddress: string) {}

    public authSms(code: number): void {
        console.log(`Verifying SMS code ${code}`);
        this.verified = true;
    }

    public pay(order: Order): void {
        if (this.verified === false) throw new Error("Not authorized");
        console.log("Processing debit payment type");
        console.log(`Using email address: ${this.emailAddress}`);
        order.status = "paid";
    }
}
