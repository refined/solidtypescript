export class Order {
    private readonly items = [];
    private readonly quantities = [];
    private readonly prices = [];
    private status = "open";
    

    public add_item(name: string, quantity: number, price: number): void {
        this.items.push(name);
        this.quantities.push(quantity);
        this.prices.push(price);
    }

    public total_price(): number {
        let total = 0;
        for (const i in this.prices) {
            total += this.quantities[i] * this.prices[i]
        }
        return total;
    }

    public pay(payment_type: string, security_code: string): void {
        if (payment_type === "debit") {
            console.log("Processing debit payment type");
            console.log(`Verifying security code: ${security_code}`);
            this.status = "paid";
        }
        else if(payment_type === "credit") {
            console.log("Processing credit payment type");
            console.log(`Verifying security code: ${security_code}`);
            this.status = "paid";
        } else {
            throw new Error("Unknown payment type: {payment_type}");
        }
    }
}
