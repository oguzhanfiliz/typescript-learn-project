var a;
var b;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["krediPayment"] = 0] = "krediPayment";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
    Payment[Payment["doorPayment"] = 4] = "doorPayment";
})(Payment || (Payment = {}));
;
var kredi = Payment.krediPayment; //0
var havale = Payment.havale; //1
var eft = Payment.eft; //2
var doorPayment = Payment.doorPayment; //2
