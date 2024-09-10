/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i;
let mul;
while(i=1){
    mul=i*i;
  
    i++;
    console.log(mul);
 if(mul==100){
    break;
 }
}