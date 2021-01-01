import {Products} from './Product';
import {iProductService} from './iProductService';
import { SimpleDataSource } from './SimpleDataSource';
export class ProductService implements iProductService{
    private dataSource: SimpleDataSource;
    private products: Array<Products>
    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products=new Array
        this.dataSource.getProducts().forEach(p=> this.products.push(p))
    }
    getById(id: number): Products {
        return this.products.filter(p=>p.id === id )[0];

    }
    getProducts(): Products[] {
        return this.products;
    }
    saveProduct(product: Products): void {
        if(product.id ==0 ||product.id ==null){
            product.id = this.generateId();
            this.products.push(product);
        }else{
            let index = this.products.indexOf(product);
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Products): void {
        let index = this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
            
        }
    }
    private generateId(): number{
        let key = 1;
        while(this.getById(key) !=null){
            key++;
        }
        return key;
    }
}