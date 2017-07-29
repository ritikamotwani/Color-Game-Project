var col = generateRandomColors(6);
var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var reset = document.getElementById("reset")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
reset.addEventListener("click", function(){
	col = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = col[i];
	}
	h1.style.backgroundColor = "#232323";

});
for (var i = 0; i < squares.length; i++)
{
	squares[i].style.background = col[i];
	squares[i].addEventListener("click", function()
	{
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct";

			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?"
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
	});
}
function changeColors(colo)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colo;
	}
}
function pickColor()
{
	var random = Math.floor(Math.random() * col.length);
	return col[random];
}
function generateRandomColors(num)
{
	var arr = [];
	for(var i = 0; i < num; i++)
	{
		arr.push(randomColor())
	}
	return arr;
}
function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
