function calculate()
{
	if(document.getElementsByClassName("getdata1")[0].style.display=="block")
	{
		var a = document.getElementById('cradius').value; 
		document.getElementById('perimeter').value = 2*3.14*a;
		document.getElementById('area').value = 3.14*3.14*a;
		
	}

	if(document.getElementsByClassName("getdata2")[0].style.display=="block")
	{
		var a = parseInt(document.getElementById('tside1').value); 
		var b = parseInt(document.getElementById('tside2').value); 
		var c = parseInt(document.getElementById('tside3').value);
		var d = parseFloat((a + b + c)*0.5);
		// var e = parseInt(d*(d-a)*(d-b)*(d-c));
		document.getElementById('perimeter').value = a + b + c;
		document.getElementById('area').value = Math.sqrt(d*(d-a)*(d-b)*(d-c));
		
	}

	if(document.getElementsByClassName("getdata3")[0].style.display=="block")
	{
		var a = document.getElementById('sside').value; 
		document.getElementById('perimeter').value = 4*a;
		document.getElementById('area').value = a*a;
		
	}

	if(document.getElementsByClassName("getdata4")[0].style.display=="block")
	{
		var a = document.getElementById('rlength').value; 
		var b = document.getElementById('rbreadth').value; 
		document.getElementById('perimeter').value = 2*(+a + +b);
		document.getElementById('area').value = b*a;
		
	}

	if(document.getElementsByClassName("getdata5")[0].style.display=="block")
	{
		var a = document.getElementById('hside').value; 
		document.getElementById('perimeter').value = 6*a;
		document.getElementById('area').value = 6*(1.732/4)*a*a;
		
	}
}



function showcircle()
{
	 var a = document.getElementsByClassName("getdata1")[0];
	 var b = document.getElementsByClassName('getdata2')[0];
	 var c = document.getElementsByClassName('getdata3')[0];
	 var d = document.getElementsByClassName('getdata4')[0];
	 var e = document.getElementsByClassName('getdata5')[0];
	 a.style.display="block";
	 b.style.display="none";
	 c.style.display="none";
	 d.style.display="none";
	 e.style.display="none";


	 a.style.borderStyle = "solid";

	 document.getElementsByClassName("datacollect")[0].removeChild(document.getElementsByClassName("datacollect")[0].childNodes[2]);

	var para = document.createElement("p");
	var node = document.createTextNode("Circle");
	para.appendChild(node);

	var element = document.getElementsByClassName("datacollect")[0];
	element.appendChild(para);


	 // document.getElementsByClassName("datacollect")[0].innerHTML += 'Circle';    

}


function showtriangle()
{
	 var a = document.getElementsByClassName("getdata1")[0];
	 var b = document.getElementsByClassName('getdata2')[0];
	 var c = document.getElementsByClassName('getdata3')[0];
	 var d = document.getElementsByClassName('getdata4')[0];
	 var e = document.getElementsByClassName('getdata5')[0];
	 a.style.display="none";
	 b.style.display="block";
	 c.style.display="none";
	 d.style.display="none";
	 e.style.display="none";

	 document.getElementsByClassName("datacollect")[0].removeChild(document.getElementsByClassName("datacollect")[0].childNodes[2]);

	var para = document.createElement("p");
	var node = document.createTextNode("Triangle");
	para.appendChild(node);

	var element = document.getElementsByClassName("datacollect")[0];
	element.appendChild(para);



}


function showsquare()
{
	 var a = document.getElementsByClassName("getdata1")[0];
	 var b = document.getElementsByClassName('getdata2')[0];
	 var c = document.getElementsByClassName('getdata3')[0];
	 var d = document.getElementsByClassName('getdata4')[0];
	 var e = document.getElementsByClassName('getdata5')[0];
	 a.style.display="none";
	 b.style.display="none";
	 c.style.display="block";
	 d.style.display="none";
	 e.style.display="none";


	 document.getElementsByClassName("datacollect")[0].removeChild(document.getElementsByClassName("datacollect")[0].childNodes[2]);

	var para = document.createElement("p");
	var node = document.createTextNode("Square");
	para.appendChild(node);

	var element = document.getElementsByClassName("datacollect")[0];
	element.appendChild(para);


}


function showrectangle()
{
	 var a = document.getElementsByClassName("getdata1")[0];
	 var b = document.getElementsByClassName('getdata2')[0];
	 var c = document.getElementsByClassName('getdata3')[0];
	 var d = document.getElementsByClassName('getdata4')[0];
	 var e = document.getElementsByClassName('getdata5')[0];
	 a.style.display="none";
	 b.style.display="none";
	 c.style.display="none";
	 d.style.display="block";
	 e.style.display="none";


	 document.getElementsByClassName("datacollect")[0].removeChild(document.getElementsByClassName("datacollect")[0].childNodes[2]);

	var para = document.createElement("p");
	var node = document.createTextNode("Rectangle");
	para.appendChild(node);

	var element = document.getElementsByClassName("datacollect")[0];
	element.appendChild(para);



}


function showhexagon()
{
	 var a = document.getElementsByClassName("getdata1")[0];
	 var b = document.getElementsByClassName('getdata2')[0];
	 var c = document.getElementsByClassName('getdata3')[0];
	 var d = document.getElementsByClassName('getdata4')[0];
	 var e = document.getElementsByClassName('getdata5')[0];
	 a.style.display="none";
	 b.style.display="none";
	 c.style.display="none";
	 d.style.display="none";
	 e.style.display="block";


	 document.getElementsByClassName("datacollect")[0].removeChild(document.getElementsByClassName("datacollect")[0].childNodes[2]);

	var para = document.createElement("p");
	var node = document.createTextNode("Hexagon");
	para.appendChild(node);

	var element = document.getElementsByClassName("datacollect")[0];
	element.appendChild(para);



}




