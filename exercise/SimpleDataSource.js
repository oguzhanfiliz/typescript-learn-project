"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Products(1, "Samsung S5", "Telefon", 1000), new Product_1.Products(2, "Samsung S6", "Telefon", 2000), new Product_1.Products(3, "Samsung S7", "Telefon", 3000), new Product_1.Products(4, "Samsung S8", "Telefon", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
