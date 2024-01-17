const prompt=require("prompt-sync")();
var a=prompt()
var b=[];
console.log("enter the arrays")
for(var i=0;i<a;i++)
{
    b[i]=prompt();
}
for(var i=0;i<a;i++)
{
    var c=b[i].length;
    if(c%2==0)
    console.log(b[i]);
}