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
}

let john = new User('John Doe', 'johndoe@gmail.com', 40)

console.log(john.age)
