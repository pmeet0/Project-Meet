let array = ["Life", "Auto", "Health"];
array.forEach(element => {
    var option = document.createElement("option");
    option.text = element;
    option.value = element;
    document.getElementById("insuranceType").appendChild(option);
});

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("show").innerHTML = "Your Selected Insurance Type is: " + document.getElementById("insuranceType").value;
});