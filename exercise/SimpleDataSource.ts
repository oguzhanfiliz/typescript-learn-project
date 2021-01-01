import {Products} from "./Product";
export class SimpleDataSource {
    private products: Array<Products>;
    constructor(){
        this.products = new Array<Products>(
            new Products(1,"Samsung S5","Telefon",1000),
            new Products(2,"Samsung S6","Telefon",2000),
            new Products(3,"Samsung S7","Telefon",3000),
            new Products(4,"Samsung S8","Telefon",4000)
        );
    }
    getProducts(): Products[]{
        return this.products;
    }
}
