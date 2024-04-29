const passwordIs = document.getElementById('passwordIs')
const input = document.getElementById('floatingInput') 




input.addEventListener("input", (e)=>{
    let typed = e.target.value.length
    console.log(typed)


    if(typed < 5){
        passwordIs.innerHTML="Weak"
        passwordIs.style.color = "#FF0000"
        passwordIs.parentElement.style.color="#FF0000"
        input.style.border= "3px solid #FF0000"
    }else if(typed >= 5 && typed <= 10){
        passwordIs.innerHTML="Better"
        passwordIs.style.color = "#FF9300"
        passwordIs.parentElement.style.color="#FF9300"
        input.style.border= "3px solid #FF9300"
    }else if(typed > 10 &&  typed<=12){
        passwordIs.innerHTML="Medium"
        passwordIs.style.color = "#FBFF00"
        passwordIs.parentElement.style.color="#FBFF00"
        input.style.border= "3px solid #FBFF00"
    }else if(typed>12){
        passwordIs.innerHTML="Strong"
        passwordIs.style.color = "#49FF00"
        passwordIs.parentElement.style.color="#49FF00"
        input.style.border= "3px solid #49FF00"
    }
})

