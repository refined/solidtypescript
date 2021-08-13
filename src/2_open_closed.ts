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
	pay(order: Order, securityCode: string): void;
}

export class DebitPaymentProcessor implements PaymentProcessor {
	public pay(order: Order, securityCode: string): void {
		console.log("Processing debit payment type");
		console.log(`Verifying security code: ${securityCode}`);
		order.status = "paid";
	}
}

export class CreditPaymentProcessor implements PaymentProcessor {
	public pay(order: Order, securityCode: string): void {
		console.log("Processing credit payment type");
		console.log(`Verifying security code: ${securityCode}`);
		order.status = "paid";
	}
}
