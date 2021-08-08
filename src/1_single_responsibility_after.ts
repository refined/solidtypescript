
export class Order {
    private readonly items = [];
    private readonly quantities = [];
    private readonly prices = [];
    public status: string = "open";
    

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
}

export class PaymentProcessor {
    public pay_debit(order: Order, security_code: string): void{ 
        console.log("Processing debit payment type");
        console.log(`Verifying security code: ${security_code}`);
        order.status = "paid";
    }

    public pay_credit(order: Order, security_code: string): void { 
        console.log("Processing credit payment type");
        console.log(`Verifying security code: ${security_code}`);
        order.status = "paid";
    }
}
