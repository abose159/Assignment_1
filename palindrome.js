//palindrome
let str="arijit";
let bag="";
for (let i=str.length-1; i>=0; i--)
  {
    bag+=str;
  }
if (str==bag)
{
  console.log("Palindrome");
}
else {
  console.log("Not a palindrome");
}