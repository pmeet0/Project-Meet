function add(check){
    if(!check.matches)
    {
        let vid = "<video width=\"600\" height=\"400\" id=\"myvid\" autoplay muted><source src=\"images/Vegies.mp4\" type=\"video/mp4\">Your browser does not support the video tag.</video>";
        document.getElementById('vid1').innerHTML = vid;
    }
    else
    {
        let vid = "<video width=\"265\" height=\"200\" id=\"myvid\" autoplay muted><source src=\"images/Vegies.mp4\" type=\"video/mp4\">Your browser does not support the video tag.</video>";
        document.getElementById('vid1').innerHTML = vid  
    }
}

let check = window.matchMedia("(max-width: 500px)")
add(check);
check.addListener(add);

function calBMI() {
    //Obtain user inputs
   let height = Number(document.getElementById("ht").value);
   let heightunits = document.getElementById("ht_units").value;
   let weight = Number(document.getElementById("wt").value);
   let weightunits = document.getElementById("wt_units").value;

    if (height!=0 && weight!=0){
        //Convert all units to metric
        if (heightunits == "inches") height /= 39.3700787;
        if (weightunits == "lb") weight /= 2.20462;

        //Perform calculation
        let BMI = weight / Math.pow(height, 2);
        //Display result of calculation
        document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
            
        if (BMI < 18.5) document.getElementById("result").innerHTML = "You are Underweight.";
        if (BMI >= 18.5 && BMI <= 25) document.getElementById("result").innerHTML = "You are Normal.";
        if (BMI >= 25 && BMI <= 30) document.getElementById("result").innerHTML = "You are Obese.";
        if (BMI > 30) document.getElementById("result").innerHTML = "You are Overweight.";}
    else{
        document.getElementById("result").innerHTML = "Please enter proper values";  
   }    
}
