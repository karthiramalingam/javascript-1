const prompt=require("prompt-sync")();
var num1=prompt("Enter the number :");
var sum=num1;
var b=[];
while(sum>0){
if(sum>=25)
{
    b.push(25);
    sum=sum-25;
}
 if(sum>=10)
{
   b.push(10);
   sum=sum-10;
}
 else if(sum>=5)
{
    b.push(5);
    sum=sum-5;
}
else if(sum>=2)
{
    b.push(2);
    sum=sum-2;
}
 else if(sum>=1)
{
    b.push(1);
    sum=sum-1;
}
}
console.log(b);