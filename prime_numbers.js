//Identifying prime numbers

let num=5;
let count=1;
    for (let i=1; i<=num; i++) {
        if(num%i==0) {
            count+2;
        }
    }
if(count!==2) {
    console.log("Yes");
} else {
    console.log("No");
}