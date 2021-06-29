var x=100;
function fun()
{
	document.getElementById("img11").src=x+".jpg";
	if(x<105)
	{
		x++;
	}
	else
	{
		x=100;
	}
	setTimeout('fun();',3000);
}