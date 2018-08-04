export class Gasto {
    id: String;
    name: String;
    price: String;
    date: String;

    constructor(
        id: string = '',
        name: string = '',
        price: string = '',
        date: String = (new Date()).toString(),
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
    }
}
