/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
console.log("Odd Numbers:");
let sum=0;
for(let i=61;i<=100;i++){
    if(i%2==1){
    console.log(i);
    }
sum=sum+i;
}
console.log(sum);

console.log("Even Numbers:");
let sums=0;
for(let i=78;i<=98;i++){
    if(i%2==0){
    console.log(i);
  
    }
    sums=sums+i;
}
console.log(sums);

console.log("------------------------------");

let i=61;
let sum1=0;
while(i<=98){
    if(i%2==0){
        console.log(i);

    }
    sum1=sum1+i;
    i++;
}
console.log(sum1);
