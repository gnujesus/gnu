var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coffee = /** @class */ (function () {
    function Coffee() {
        this.description = "I'm a coffee";
    }
    return Coffee;
}());
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Decorator;
}(Coffee));
var Expresso = /** @class */ (function (_super) {
    __extends(Expresso, _super);
    function Expresso() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "I'm an Expresso";
        return _this;
    }
    Expresso.prototype.getDescription = function () {
        return this.description;
    };
    Expresso.prototype.cost = function () {
        return 9.99;
    };
    return Expresso;
}(Coffee));
var Cappuccino = /** @class */ (function (_super) {
    __extends(Cappuccino, _super);
    function Cappuccino() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "I'm a Cappuccino";
        return _this;
    }
    Cappuccino.prototype.getDescription = function () {
        return this.description;
    };
    Cappuccino.prototype.cost = function () {
        return 15.99;
    };
    return Cappuccino;
}(Coffee));
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "I'm a Mocha";
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.description;
    };
    Mocha.prototype.cost = function () {
        return 12.99;
    };
    return Mocha;
}(Coffee));
var WithMilk = /** @class */ (function (_super) {
    __extends(WithMilk, _super);
    function WithMilk(coffee) {
        var _this = _super.call(this) || this;
        _this.coffee = coffee;
        return _this;
    }
    WithMilk.prototype.getDescription = function () {
        return this.coffee.getDescription() + " , with milk";
    };
    WithMilk.prototype.cost = function () {
        return this.coffee.cost() + 0.99;
    };
    return WithMilk;
}(Decorator));
var WithCinnamon = /** @class */ (function (_super) {
    __extends(WithCinnamon, _super);
    function WithCinnamon(coffee) {
        var _this = _super.call(this) || this;
        _this.coffee = coffee;
        return _this;
    }
    WithCinnamon.prototype.getDescription = function () {
        return this.coffee.getDescription() + " , with cinnamon";
    };
    WithCinnamon.prototype.cost = function () {
        return this.coffee.cost() + 1.05;
    };
    return WithCinnamon;
}(Decorator));
var WithExtraSugar = /** @class */ (function (_super) {
    __extends(WithExtraSugar, _super);
    function WithExtraSugar(coffee) {
        var _this = _super.call(this) || this;
        _this.coffee = coffee;
        return _this;
    }
    WithExtraSugar.prototype.getDescription = function () {
        return this.coffee.getDescription() + " , with extra sugar";
    };
    WithExtraSugar.prototype.cost = function () {
        return this.coffee.cost() + 0.80;
    };
    return WithExtraSugar;
}(Decorator));
var expresso = new Expresso();
console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");
expresso = new WithMilk(expresso);
console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");
expresso = new WithCinnamon(expresso);
console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");
expresso = new WithExtraSugar(expresso);
console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");
