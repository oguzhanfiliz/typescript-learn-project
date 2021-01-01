var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi x: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus x: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Bus;
}());
