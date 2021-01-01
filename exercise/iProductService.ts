import { Products } from "./Product";
export interface iProductService{
    getById(id:number):Products;
    getProducts(): Array<Products>;
    saveProduct(product:Products):void;
    deleteProduct(product:Products):void;
}