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

export interface Authorizer {
    isAuthorized(): boolean;
}

export class SmsAuthorizer implements Authorizer {
    private authorized = false;

    public verifyCode(code: number): void {
        console.log(`Verifying SMS code ${code}`);
        this.authorized = true;
    }

    public isAuthorized(): boolean {
        return this.authorized;
    }
}

export class GoogleAuthorizer implements Authorizer {
    private authorized = false;

    public verifyCode(code: number): void {
        console.log(`Verifying Google auth code ${code}`);
        this.authorized = true;
    }

    public isAuthorized(): boolean {
        return this.authorized;
    }
}

export class RobotAuthorizer implements Authorizer {
    private authorized = false;

    public notRobot(): void {
        this.authorized = true;
    }

    public isAuthorized(): boolean {
        return this.authorized;
    }
}

export interface PaymentProcessor {
    pay(order: Order): void;
}

export class DebitPaymentProcessor implements PaymentProcessor {
    constructor(
        private readonly securityCode: string,
        private readonly authorized: Authorizer
    ) {}

    public pay(order: Order): void {
        if (this.authorized.isAuthorized() === false)
            throw new Error("Not authorized");
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

export class PaypalPaymentProcessor implements PaymentProcessor {
    constructor(
        private readonly emailAddress: string,
        private readonly authorized: Authorizer
    ) {}

    public pay(order: Order): void {
        if (this.authorized.isAuthorized() === false)
            throw new Error("Not authorized");
        console.log("Processing debit payment type");
        console.log(`Using email address: ${this.emailAddress}`);
        order.status = "paid";
    }
}
