// function veHinh(n){
//     for (let i=1;i<=n;i++){
//         let num=0;
//         for(let j=1;j<=i;j++){
//             num++;
//         }
//         console.log(num);
//     } 
// }
// veHinh(5);
// // console.log('Hello World');
// // console.log('Goodnight');
// // // setTimeout(() => console.log('Wait for me'), 5000);
class Person{
    constructor(ten, tuoi){
        this.name = ten;
        this.age = tuoi;
    }
    sayHello(){
        console.log('Hello, my name is: ' + this.name);
    }
}
const Ti = new Person('Ti','12');
console.log(Ti);
