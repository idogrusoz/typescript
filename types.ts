let myString: string
let myNum: number
let myBool: boolean
let myVar: any

let strArr: string[]
let numArr: number[]
let boolArr: boolean[]

myString = 'Hello World'
myNum = 22
myBool = true
myVar = 5 + '5'

strArr = ['Hello', 'World']
numArr = [1, 2, 3]
boolArr = [true, true, false]

console.log(myString)
console.log(myNum)

// Another way of defining variable types

let newStrArr: Array<string>
let newNumArr: Array<number>
let newBoolArr: Array<boolean>

let strNumTuple: [string, number]
// It must match the above combination. Try to change and see that it gives an error
// After passing initial pattern it can continue in any way (can be followed by any value)
strNumTuple = ['Hello', 4]

let myVoid: void = null //can be undefined too

let myNull: null = null

let myUndefined: undefined = undefined
let myUndefined2: null = undefined
let myNull2: undefined = null
