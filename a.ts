abstract class Product {
    name: string;
    id: number;
    price: number;

    constructor(name: string, id: number, price: number) {
        this.name=name;
        this.id= id;
        this.price=price;

        
    }
    GetCurrentPrice(){
        return this.price;
    }
    abstract GetColumn();



}

class Food extends Product{
    expirationDate: Date;
    weight: number;
    
    constructor(name: string, id: number, price: number, expiration: Date, weight: number){
        super(name,id,price)
        this.expirationDate = expiration;
        this.weight = weight;
    
    }
    GetColumn() {
        return 1;
    }

}
enum ToyType {
    thinking,
    assembling,
    imagination
}
class Toy extends Product{
    tilAge: number;
    type: ToyType;
    constructor(name: string, id: number, price: number,tilAge: number, type: ToyType){
        super(name, id,price);
        this.tilAge = tilAge;
        this.type= type;
    }
    GetColumn() {
        return 2;
    }

}


