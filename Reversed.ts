function reverse(num){
    var sum = 0;
    var prod = 0;
    while(num>0){
        var rem= Math.floor(num%10);
        num/=10;
        sum = sum+rem
        if(prod===0){
            prod = rem
        } else{
            if(rem!==0){
                prod=prod*rem;
            }
        }
    }
    console.log(sum); 
    console.log(prod); 
    console.log(prod-sum);
}
reverse(321)