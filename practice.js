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
