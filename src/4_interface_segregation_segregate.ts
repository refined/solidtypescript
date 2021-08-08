export class Order {
    private readonly items = [];
    private readonly quantities = [];
    private readonly prices = [];
    public status = "open";

    public add_item(name: string, quantity: number, price: number): void {
        this.items.push(name);
        this.quantities.push(quantity);
        this.prices.push(price);
    }

    public total_price(): number {
        let total = 0;
        for (const i in this.prices) {
            total += this.quantities[i] * this.prices[i];
        }
        return total;
    }
}

export class SmsAuthorizer {
    private authorized = false;

    public verify_code(code: number): void {
        console.log(`Verifying SMS code ${code}`);
        this.authorized = true;
    }

    public is_authorized(): boolean {
        return this.authorized;
    }
}

export interface PaymentProcessor {
    pay(order: Order): void;
}

export class DebitPaymentProcessor implements PaymentProcessor {
    constructor(
        private readonly security_code: string,
        private readonly authorized: SmsAuthorizer
    ) {}

    public pay(order: Order): void {
        if (this.authorized.is_authorized() === false)
            throw new Error("Not authorized");
        console.log("Processing debit payment type");
        console.log(`Verifying security code: ${this.security_code}`);
        order.status = "paid";
    }
}

export class CreditPaymentProcessor implements PaymentProcessor {
    constructor(private readonly security_code: string) {}

    public pay(order: Order): void {
        console.log("Processing credit payment type");
        console.log(`Verifying security code: ${this.security_code}`);
        order.status = "paid";
    }
}

export class PaypalPaymentProcessor implements PaymentProcessor {
    constructor(
        private readonly email_address: string,
        private readonly authorized: SmsAuthorizer
    ) {}

    public pay(order: Order): void {
        if (this.authorized.is_authorized() === false)
            throw new Error("Not authorized");
        console.log("Processing debit payment type");
        console.log(`Using email address: ${this.email_address}`);
        order.status = "paid";
    }
}
