var numSquares = 6;
var col = generateRandomColors(numSquares);
var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var reset = document.getElementById("reset")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
easy.addEventListener("click",function()
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	
	numSquares = 3;
	col = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		if(col[i])
		{
			squares[i].style.background = col[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});
hard.addEventListener("click",function()
{
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;
	col = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
			squares[i].style.background = col[i];
			squares[i].style.display = "block";
	}
});
colorDisplay.textContent = pickedColor;
reset.addEventListener("click", function(){
	col = generateRandomColors(numSquares);
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
