var bulb = 0;

function findbulp()
{
    if(bulb==0)
    {
        document.getElementById("image").src="car2.jpg" ;
        bulb=1;
    }
    else{
        document.getElementById("image").src="car 1.jpg";
        bulb=0;
    }

}