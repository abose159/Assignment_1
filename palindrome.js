//palindrome
let str="arijit";
let bag="";
for (let i=N-1; i>=0; i++)
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