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
