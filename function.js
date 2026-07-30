//Functions
// 1
function Name(name="default"){
    console.log(name);
}
Name("Kiran Zafra");

// 2
function add(x,y){
    sum=x+y;
    console.log(sum);
}
add(5,5);

// 3
function sub(l,m){
    sub=l-m;
    console.log(sub);
}
sub(7,8);

// 4
function sqr(n){
    sqr=n*n;
    console.log(sqr); 
}
sqr(6);

//5
function check(a){
    if(a%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd")
    }
}
check(3);

//6
function k(...z){
let s=z[0];
for(i=1; i<z.length; i++){
    if(z[i]>s){
        s=z[i];
        console.log(s);
    }
}
}
k(3, 9, 5, 1, 7, 0);

// 7
function r(s){
let e=""
for(i=s.length-1; i>=0; i--){
    e=e+s[i];
}
  console.log(e);
}
r("Kiran");

// 8
function v(s){
    const vowels="aeiouAEIOU";
    let c=0;
    for(i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            c++
        }
    }
    console.log(c);
}
v("Kiran Zafar");

// 9
function f(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * f(n - 1);
}
console.log(f(4));

// 10
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calculator(a, b, operation) {
    return operation(a, b);
}
console.log(calculator(10, 5, add));
console.log(calculator(10, 5, sub));
console.log(calculator(10, 5, mul));
console.log(calculator(10, 5, div));
