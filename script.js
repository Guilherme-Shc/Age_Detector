function verify(){
    var date = new Date()
    var year = date.getFullYear()
    var year_form = document.getElementById("age_input")
    var res = document.querySelector("div#res")
    if (year_form.value.length == 0 || Number(year_form.value) > year){
        window.alert("ERROR verify the input and try again")
    }
    else{
        var fsex = document.getElementsByName("radsex")
        var age = year - Number(year_form.value)
        var gender = ""
        var img = document.createElement("img")
        img.setAttribute("id", "picture")
        if(fsex[0].checked){
            gender = "Male"
            if(age>=0 && age < 12){
                img.setAttribute("src", "images/child_m.jpg") 
            }
            else if(age < 21){
                img.setAttribute("src", "images/teen_m.jpg") 
            }
            else if(age < 50){
                img.setAttribute("src", "images/adult_m.jpg") 
            }
            else{
                img.setAttribute("src", "images/elderly_m.jpg") 
            }
        }
        else if(fsex[1].checked){
            gender = "Female"
            if(age>=0 && age < 12){
                img.setAttribute("src", "images/child_f.jpg") 
            }
            else if(age < 21){
                img.setAttribute("src", "images/teen_f.jpg") 
            }
            else if(age < 50){
                img.setAttribute("src", "images/adult_f.jpg") 
            }
            else{
                img.setAttribute("src", "images/elderly_f.jpg") 
            }
        }
        
        res.innerHTML = `We detected a ${gender} with ${age} years`
        res.appendChild(img)
    }
}