// 1

let nums = [10, -5, 20, -3, 30, -12];
let arr = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
        arr.push(nums[i]); 
    }
}

console.log(arr);
