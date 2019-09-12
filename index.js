//class를 사용한 oop in javascript
`
ES6 버전 부터 추가된 CLASS
class는 슈가신텍스 입니다. 내부적으로는 function으로 동작!!
////////////////////////////////////////////////////////////////////
1) 클래스 생성해보기
////////////////////////////////////////////////////////////////////

function Person(name, first, second){
  this.name = name;
  this.first = first;
  this.second = second;
}
//javascritp meothod
Person.prototype.sum = function(){
  console.log(this.name)
}

//객체 생성
const jang = new Person('geonil', 10, 20);
jang.sum() // name
jang.sum = function(){
  console.log(this.name , this.first, this.seconde);
}
jang.sum() // name first second

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Person{
  constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = sconde;
  }
  sun(){
    console.log(this.name)
  }
}

//객체 생성
const jang = new Person('geonil', 10, 20);
jang.sum() // name
jang.sum = function(){
  console.log(this.name , this.first, this.seconde);
}
jang.sum() // name first second

////////////////////////////////////////////////////////////////////
2) 상속
////////////////////////////////////////////////////////////////////
필요의 이유:
  만약! 초기값을 추가하고, 메소드를 추가 시키고 싶다면??
  모든 클래스를 내가 만든것이 아니고, 가져다만 쓰는 중이라면!?
  중복을 피하고 원하는 부분만 수정을 해보자

class Person{
  constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
    return this.first + this.second;
  }
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
1)extends 키워드를 사용하여 확장한다. --클래스 사용하면 끝 --
2)supur

class PersonPlus extends Person{
  constructor(name,first, second, third){
    super();
    this.third = third
  }

  sum(){
    return super.sum()+this.third
  }

  avg(){
    return (this.sum() + this.third) / 3
  }
}

////////////////////////////////////////////////////////////////////
3) object inheritance
////////////////////////////////////////////////////////////////////

* 주류 객체 지향언어 상속!
 super class <- sub class -> object 생성
 + object가 어떤 기능을 가지게 되는지 class에서 이미 정해진다

* 자바스크립트의 프로토에 의한 상속 (객체를 의한 상속 / 상속의 link만 바꾸면 된다)
  super object       <------------------   sub object
  (prototype object) <--(prototype link)


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const superObj = {
  superV:'super'
}

const subObj = {
  subV:'sub'
}

subObj.__proto__ = superObj;
console.log(subObj.subV);
console.log(subObj.superV);  <-- 자신의 객체에서 superV가 있는지 우선적으로 찾아본다
만약 없다면 __proto__ 링크로 연결된 객체에서 superV 를 가지고 있는지 찾아보고 있다면 그 값을
사용한다. 즉, 자신의 객체에 해당 값이 없다고 한다면 연결된 링크(__proto__) 객체를 타고 올라가서
해당값을 쭉 찾아 본다
* prototype 과 __proto__ 헷 갈리지만.... 다르다
  그렇기 때문에 새로운 방법이 나왔어요

  이렇게 하면 위에 __poto__를 사용하는 코드와 동일하게 동작한다.
  const subObj = object.create(superObj);

const jang = {
  name:'jang',
  first: 10 , second:20,
  sum:function(){return this.first + this.second}
}

const lee = {
  name:'lee',
  first:10, second:10
}
lee.__poto__ = jang;
lee.sum(); 을 사용하게 된다면 __poto__링크를 찾아 올라가서!
자신이 없는기능을 사용할 수 있게 됩니다.

권장 방법 - 동일하게 사용이 가능합니다
const lee = object.create(kim);
lee.name = 'lee',
lee.first = 10,
lee.second = 20,
lee.avg = function(){
  return (this.first + this.seconde) / 2
}


////////////////////////////////////////////////////////////////////
4) 자바스크립트의 세계에서는! function is a god
 object_function
////////////////////////////////////////////////////////////////////
const jang = {name:'jang',first:10, second:20}
const kim = {name:'kim',first:10, second:10}
function sum(){
  return this.first + this+second;
}

[1]
sum.call(); === sum()
//모든 함수는 call 이라는 객체를 가지고 있다.
 여기서 첫 번째 맴버로 전달하는 인자가 this로 사용할 수 있게 된다
 function sum(pre){
   return pre + this.first + this.second
 }
 sum.call(kim, '=>');

 [2]bind // this.를 고정하기 위해서 사용
 const newKim = sum.bind(kim, '=>');
 newKim()

 ////////////////////////////////////////////////////////////////////
 5) prototype vs __proto__
 ////////////////////////////////////////////////////////////////////
[1] 함수란 무엇인가?
  function Person(){}  자바스크립트에서 함수는 객체다
  const Person = new Function();

  function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
  }
                                 - sum
  Person   <------------------ + constructor
    + prototype --------------> Person's prototype

  Person.prototype.sum = function(){}
    Person's 의 프로토 타입에 sum을 저장한다

  const jang = new Person('jang',10,20); 가 생성돈다
    + jang
       - __proto__ <-- Person의 prototype 이 된다! 즉 Person's prototype 을 가르키게 된다
       - name
       - first
       - second


  jang.name //jang
  jang.sum() -> __proto__ 로 연결된 sum을 찾아 사용한다


////////////////////////////////////////////////////////////////////
5) 생성자 함수를 통한 상속 class 사용하는 거는 위에서 끝
////////////////////////////////////////////////////////////////////

function Person(name, first, second){
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function(){
  return this.first + this.second;
}

function PersonPlus(name, first, second, third){
  // this.name = name;
  // this.first = first;
  // this.second = second;
  Person.call(this, name, first, second); // 위 3 줄과 동일 하게 동작 super 와 동일
  this.third = third;
}
PersonPlus.prototype.avg = function(){
  return (this.first+this.second+this.third) / 3
}

const jang = new PersonPlus('jang', 10, 20, 30);
jang.sum() 사용불가
jang.avg() 사용가능

jang
 + __proto__  ----> PersonPlus's prototype
 + name             + constructor
 + first            + avg
 + second           + __proto__  ------> Object를 가르키고 있다
 + third                                이걸 Person 의 prototype을 가르 키게 하자

PersonPlus.prototype.__proto__ = Person.prototype
=> PersonPlus.prototype = Object.create(Person.prototype);
+ PersonPlus.prototype.constructor = PersonPlus

constructor = 근본을 나타내는 함수! 





























`
