export class Order {
	private readonly items = [];
	private readonly quantities = [];
	private readonly prices = [];
	private status = "open";

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

	public pay(paymentType: string, securityCode: string): void {
		if (paymentType === "debit") {
			console.log("Processing debit payment type");
			console.log(`Verifying security code: ${securityCode}`);
			this.status = "paid";
		} else if (paymentType === "credit") {
			console.log("Processing credit payment type");
			console.log(`Verifying security code: ${securityCode}`);
			this.status = "paid";
		} else {
			throw new Error("Unknown payment type: {paymentType}");
		}
	}
}
