class User {
  name: string
  email: string
  age: number

  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
    console.log(
      'The new user is: ' + this.name + ' who is ' + this.age + 'years old'
    )
  }

  register() {
    console.log(this.name + ' is now registered')
  }

  payInvoice() {
    console.log(this.name + ' paid invoice')
  }
}

let john = new User('John Doe', 'johndoe@gmail.com', 40)

console.log(john.age)

john.register()

//  Class inheritence

class Member extends User {
  id: number

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age)
    this.id = id
  }

  payInvoice() {
    super.payInvoice()
  }
}

let mike: User = new Member(1, 'Mike Smith', 'mikesmith@gmail.com', 33)

mike.payInvoice()

// Access modifiers

// Private, Public, Protected(cane be accessed only through an inheriting class)

class Hamburger {
  public name: string
  private secretIngredient: string
  protected price: number

  constructor(name: string, secretIngredient: string, price: number) {
    this.name = name
    this.secretIngredient = secretIngredient
    this.price = price
  }
}

let gourmetSpecial = new Hamburger('Gourmet Special', 'Smoked eggplant', 15)

console.log(gourmetSpecial.name)
// console.log(gourmetSpecial.secretIngredient)  *Error because it is private
// console.log(gourmetSpecial.price) * Error:  Property 'price' is protected and only accessible within class 'Hamburger' and its subclasses.
