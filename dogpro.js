const prompt=require("prompt-sync")();
var string=prompt("Enter the word ")
var a=[];
for(var i=0;i<string.length;i++)
{
    for(var j=i+1;j<string.length+1;j++)
    {
        a.push(string.slice(i,j));
    }
}
for(var i=0;i<a.length;i++){
console.log(a[i]);
}