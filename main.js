let user=parseInt(prompt("Enter the Month"))
let actual=new Date();
actual.setMonth(user);
let month=actual.getMonth();
if(0<=month&&month<=3)
{
	console.log("Fall");
}
else if(4<=month&&month<=7)
{
	console.log("Summer");
}
else
{
	console.log("Winter");
}