var a=130;
function fun1()
{
	document.getElementById("k").src=a+".jpg"
	if(a<136)
	{
		a++;
	}
	else
	{
		a=130;
	}
	setTimeout('fun1();',3000);
}
var b=112;
function fun2()
{
	document.getElementById("j").src=b+".jpg"
	if(b<119)
	{
		b++;
	}
	else
	{
		b=112;
	}
	setTimeout('fun2();',3000);
}
