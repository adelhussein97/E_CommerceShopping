
document.getElementById("mines").addEventListener("click", function decrease(ev){
    var txt = document.getElementById("numOfProduct")
    var num = parseInt(txt.value)
    if (num <= 1)
    {
        ev.preventDefault();
    }
    else if (num > 1)
    {
        num -= 1;
    }

    

    txt.innerHTML = num
})

    


document.getElementById("plus").addEventListener("click", function increase(ev){
    var txt = document.getElementById("numOfProduct").innerHTML
    var num = parseInt(txt)
    
    if (num == 10)
    {
        ev.preventDefault()
    }

    


})
