let counter =0;
function myFunction(){
counter = counter +1;
let value = document.getElementById('myInput').value;
                
            
document.getElementById('myid').innerHTML+="<br>Hey,gorgeous/handsome,good to hear that you are:" +value; 
                
document.getElementById('myButton').style ="display:none";
if(counter==2){
    document.getElementById('myid').style ="background-color:green;  color:red";
}
else{
     document.getElementById('myid').style ="background-color:black; color:white";
    }
 }