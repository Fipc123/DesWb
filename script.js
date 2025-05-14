
document.getElementById("hola").addEventListener("click",CambioColor);

let color;
function CambioColor()
{
    if(color == true)
    {
        document.body.style.backgroundColor = "red";
        color = false;
    }
    else
    {
        document.body.style.backgroundColor = "blue";
        color = true;
    }
}
