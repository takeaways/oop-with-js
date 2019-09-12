// console.log("Math.PI", Math.PI);
// console.log(Math.random());
// console.log(Math.floor(3.9)); // 내림

const MyMath = {
  PI:Math.PI,
  random(){
    return Math.random();
  },
  floor(val){
    return Math.floor(val)
  }
}

//
// console.log(MyMath.PI);
// console.log(MyMath.random())
// console.log(MyMath.floor(1.1212));


const person1 = {
  name:'jang',
  first:10,
  second:20,
  sum(){
    return this.first+this.second;
  }
}

const person2 = {
  name:'sin',
  first:10,
  second:20,
  sum:()=>{
    console.log(this);
    return this.first+this.second;
  }
}
//
// console.log(person1.name, person1.sum());
// console.log(person2.name, person2.sum());
// console.log(person2.call({first:100, second:200}))

function say(){
  const f = 100;
  const s = 200;
  console.log(this)
}
say.call({age:20})
