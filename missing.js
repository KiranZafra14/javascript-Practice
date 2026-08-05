let find =(nums)=>{
    missing=[], min=nums[0], max=nums[nums.length-1];
for(i=min; i<=max; i++){
    if(!nums.includes(i)){
        missing.push(i);
    }
}
console.log(missing);
}
find([1,3,4,6]);
find([7,8,9,10]);
