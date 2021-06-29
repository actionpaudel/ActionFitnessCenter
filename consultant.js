function fun1()
{
	var n1,nc1;
	nc1=/^[a-zA-Z ]+$/;
	n1=document.getElementById("f1");
	if(!n1.value.match(nc1))
	{
	    document.getElementById("span1").innerHTML="*Enter valid name";
	}
}

function fun3()
{
	var n3,nc3;
	nc3=/^[0-9a-zA-Z._ ]+\@[a-zA-Z]+\.[a-zA-Z.]{2,6}$/;
	n3=document.getElementById("f3");
	if(!n3.value.match(nc3))
	{
	    document.getElementById("span3").innerHTML="*Invalid Email ID";
	}
}
function fun4()
{
	var n4,nc4;
	nc4=/^[0-9]{10,10}$/;
	n4=document.getElementById("f4");
	if(!n4.value.match(nc4))
	{
	    document.getElementById("span4").innerHTML="*Invalid mobile no";
	}
}

function bill()
{
var n11,nc11;
	nc11=/^[a-zA-Z ]+$/;
	n11=document.getElementById("f1");
	var n13,nc13;
	nc13=/^[0-9a-zA-Z._ ]+\@[a-zA-Z]+\.[a-zA-Z.]{2,6}$/;
	n13=document.getElementById("f3");
	var n14,nc14;
	nc14=/^[0-9]{10,10}$/;
	n14=document.getElementById("f4");
	
	if(n11.value.match(nc11)  )
	 
	 {
	 if(n13.value.match(nc13))
	 {
	  if(n14.value.match(nc14))
	{
	var name,amt=0,slct;
	name=document.getElementById("f1").value;
	slct=document.getElementById("s1").value;
	if(slct=='o2')
	{
		amt=1000;
	}
	else if(slct=='o3')
	{
		amt=1500;
	}
	else if(slct=='o4')
	{
		amt=2000;
	}
	else if(slct=='o5')
	{
		amt=2500;
	}
	document.getElementById("ans").value="Dear "+name+" \n your estimated bill details-\n\n";
document.getElementById("ans").value+="Total payable amount= Rs."+amt;

	}
	else
	{
	alert("invalid phone no")
	}
	}
	else
	{
	alert("Invalid Email-ID")
	}
	}
	else
	{
	alert("Invalid name")
	}
}