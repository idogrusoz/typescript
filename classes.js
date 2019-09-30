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
    return User;
}());
var john = new User('John Doe', 'johndoe@gmail.com', 40);
console.log(john.age);
john.register();
