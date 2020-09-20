export class Subscription {
    isCurrentSubscription: boolean;
    title: string;
    description: string;
    priceToPay: string;
    levelOfInterest: number;

    constructor(isCurrentSubscription: boolean, title: string, description: string, priceToPay: string, levelOfInterest: number) {
        this.isCurrentSubscription = isCurrentSubscription;
        this.title = title;
        this.description = description;
        this.priceToPay = priceToPay;
        this.levelOfInterest = levelOfInterest;
    }
}
