var a=prompt()
var b=prompt()
let len1=a.length
let len2=b.length
if(len1!==len2){
console.log("Invaild Input")
}
else{
let str1=a.split('').sort().join('');
let str2=b.split('').sort().join('');
if(str1==str2){
    console.log("Anagram")
}
else
{
    console.log("Not Anagram")
}
}