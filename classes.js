var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('The new user is: ' + this.name + ' who is ' + this.age + 'years old');
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
var john = new User('John Doe', 'johndoe@gmail.com', 40);
console.log(john.age);
john.register();
//  Class inheritence
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, 'Mike Smith', 'mikesmith@gmail.com', 33);
mike.payInvoice();
// Access modifiers
// Private, Public, Protected(cane be accessed only through an inheriting class)
var Hamburger = /** @class */ (function () {
    function Hamburger(name, secretIngredient, price) {
        this.name = name;
        this.secretIngredient = secretIngredient;
        this.price = price;
    }
    return Hamburger;
}());
var gourmetSpecial = new Hamburger('Gourmet Special', 'Smoked eggplant', 15);
console.log(gourmetSpecial.name);
// console.log(gourmetSpecial.secretIngredient)  *Error because it is private
// console.log(gourmetSpecial.price) * Error:  Property 'price' is protected and only accessible within class 'Hamburger' and its subclasses.
