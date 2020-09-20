export class Coupon {
    cost: number;
    title: string;
    description: string;


    constructor(cost: number, title: string, description: string) {
        this.cost = cost;
        this.title = title;
        this.description = description;
    }
}
