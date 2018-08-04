export class Gasto {
    id: String;
    name: String;
    price: String;
    date: Date;

    constructor(
        id: string = '',
        name: string = '',
        price: string = '',
        date: Date = new Date(),
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
    }
}
