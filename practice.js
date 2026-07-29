// 1
let z=1;
while(z<=10){
    console.log(z);
    z++;
}

// 2
let y=10;
while(y>=1){
    console.log(y);
    y--;
}

// 3
let x=0;
while(x<=100){
    console.log(x);
    x+=2;
}

// 4
let x=1;
while(x<=100){
    console.log(x);
    x+=2;
}

// 5
let w=1, v=1;
do{
    w=v*7;
    console.log(w);
    v++;
}while(w<70);

// 6
let t=1, u=2;
do{
    t=t+u;
    u++;
}while(u<=100);
console.log(t);

// 7
let r=1, s=5;
for (q = 1; q <= s; q++) {
    r *= q;
}
console.log(r);

// 8
let p = 1;
do{
    p++;
}while(p<100)
console.log(p);

// 9
for(o=1; o<=100; o++){
   if(o%3==0){
    console.log(o);
   }
}

// 10
for(o=1; o<=100; o++){
   if(o%5==0 && o%7==0){
    console.log(o);
   }
}

// 11
let n= [55, 2, 99, 14, 67, 33];
m = Math.max(...n);
console.log(m);

let m=[5, 2, 9, 1, 6, 3];
let n=m[0];
for (l=1; l<m.length; l++){
    if (m[l] > n){
        n=m[l];
    }
}
console.log(n);

// 12
let i=[33, 66, 11, 99, 22, 55];
let j=i[0];
for (k=1; k<i.length; k++){
    if(i[k]<j){
        j=i[k];
    }
}
console.log(j);

// 13
let c=[9, 8, 7, 6, 5, 4], sum=0;
for(i=0; i<c.length; i++){
    sum= sum=c[i];
}
let avg= sum / c.length;
console.log("Average is:", avg);

// 14
let d= [1, 2, 3, , 4, 5, 6, 7, 8, 9], odd=0, even=0;
for(i=0; i<d.length; i++){
    if(d[i]%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log("Even=", even);
console.log("Odd=", odd);

// 15
let e=[5, 6, 7, 8, 9];
for(i=e.length-1; i>=0; i--){
console.log(e[i]);
}

// 16
let f="abc", g="";
for(i=f.length-1; i>=0; i--){
g=g+f[i];
}
console.log(g);

// 17
let str = "Pakistan";
let count = 0;
for(let i=0;i<str.length;i++)
{
    let ch = str[i].toLowerCase();

    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u")
    {
        count++;
    }
}
console.log("Vowels =", count);

// 18
let str = "Pakistan";
let consonants = 0;
for(let i=0;i<str.length;i++)
{
    let ch = str[i].toLowerCase();

    if(ch>='a' && ch<='z')
    {
        if(ch!="a" && ch!="e" && ch!="i" && ch!="o" && ch!="u")
        {
            consonants++;
        }
    }
}
console.log("Consonants =", consonants);

// 19
let arr = [10,20,30,40];
let x = 0;
for(let i=0;i<arr.length;i++)
{
    x = x + arr[i];
}
console.log(x);

// 20
let arr = [1,2,3,2,4,1,5];
let unique = [];
for(let i=0; i<arr.length; i++)
{
    let found = false;
    for(let j=0; j<unique.length; j++)
    {
        if(arr[i] == unique[j])
        {
            found = true;
            break;
        }
    }
    if(found == false)
    {
        unique[unique.length] = arr[i];
    }
}
console.log(unique);
