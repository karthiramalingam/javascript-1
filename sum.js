const prompt=require("prompt-sync")();
var a=prompt("Enter the number:")
var b=[];
console.log("enter the array")
for(var i=0;i<a;i++)
{
   
    b[i]=prompt();
}
console.log("Enter the rotate index number....")
var c=prompt("enter the number");
for(var i=c;i<a;i++)
{
    console.log(b[i]);
  
}
for(var j=0;j<c;j++){
    console.log(b[j])
}
