

//1.by using object literal
let marker={
    color:"blue",
    width:13,
    height:13
}
console.log(marker)

let student={
    studentId:101,
    studentName:"abc",
    email:"abc@gmail.com",
    branch:"CSE",
    phoneNumber:98766543210
}
console.log(`iam with studentId ${student.studentId} and my name is ${student.studentName}`)

//how to access object
let student1={
    studentId:101,
    studentName:"abc",
    email:"abc@gmail.com",
    branch:"CSE",
    phoneNumber:98766543210
}
console.log("studentId:",student1.studentId) //ist way
console.log(student["studentId"]) //2nd way

//manipulations
let student2={
    studentId:101,
    studentName:"abc",
    email:"abc@gmail.com",
    branch:"CSE",
    phoneNumber:98766543210
}
//1.fetching
//1way
console.log(student2.studentId)
//2way
console.log(student2["studentId"])

//2.updating values into the existing object
student2.studentName="Ram"
console.log(student2)

//3.adding values into the existing object
student2.fees=80000
student2.age=23
console.log(student2)

//4.deleting the values from the existing object
delete student2.age
console.log(student2)


//converting object into the arrays
let student3={
    studentId:101,
    studentName:"abc",
    email:"abc@gmail.com",
    branch:"CSE",
    phoneNumber:98766543210
}
//keys
let objectToKeys=Object.keys(student3)
console.log(objectToKeys)

//values
let objectToValues=Object.values(student3)
console.log(objectToValues)

//entries
let objectToEntries=Object.entries(student3)
console.log(objectToEntries)
console.log(objectToEntries.flat())
objectToEntries.map((f)=>console.log(f))

//2.By using object constructor
let student4=new Object()
console.log(student4)
student4.studentId=101
console.log(student4)
student4["studentName"]="abc"
console.log(student4)

//different datatypes converting to objects
//1.string
let x="hello"
console.log(x)
console.log(typeof x)

//1way
let y=new Object(x)
console.log(y)
console.log(typeof y)

//2way
let z=new String("hello")
console.log(z)
console.log(typeof z)


//2.boolean
let x1=true
console.log(x1)
console.log(typeof x1)

//1way
let y1=new Object(x1)
console.log(y1)
console.log(typeof y1)

//2way
let z1=new Boolean(true)
console.log(z1)
console.log(typeof z1)

//3.By using constructor function
function employee(eid , ename , email , salary , company , loc){
    this.eid = eid;
    this.ename = ename;
    this.email = email;
    this.salary = salary;
    this.company = company;
    this.loc = loc;
}
let e1=new employee(101 ,"john" , "john@gmail.com" ,80000,"tcs","hyd");
console.log(e1);

let e2=new employee(102,"josh","josh@gmail.com",70000,"cognizant","banglore");
console.log(e1);




