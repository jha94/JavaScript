function reverse(num){
   let sum = 0;
   let prod = 1;
   while(num>0){
       let rem = Math.floor(num%10);
       num/=10;
       sum+=rem;
       if(rem!==0){
       prod*=rem;
       }
   }
   console.log(sum);
   console.log(prod);
}
reverse(123)