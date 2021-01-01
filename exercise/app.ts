import{ProductService} from "./PorductService";
import { Products } from "./Product";
let _productService = new ProductService();
let result;

result = _productService.getById(2);
let p = new Products();
p.name = "Iphone 6";
p.price = 4000;
p.category = "Telefon";
_productService.saveProduct(p);
result = _productService.getProducts();
console.log(result);