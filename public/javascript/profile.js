// Set up equations
document.getElementById("pantry-save").addEventListener("click", function(){


    // grab values from drop down
    var numberofKids = document.getElementById("numberofKids").value;
    var numberofAdults = document.getElementById("numberofAdults").value;
    var lengthofTime = document.getElementById("lengthofTime").value;


    // callback pantry Calculator

    pantryCalculator(numberofKids, numberofAdults, lengthofTime);
});

function pantryCalculator (kids, adults, time) {
    var monthdivider;
    switch (time) {
        case "1":
            monthdivider = .0833;
            break;
        case "2":
            // finish the divider
    
        default:
            break;
    }
    var kidvariable;
    switch (kids) {
        case value:
            
            break;
    
        default:
            break;
    }
    var adultsvariable;
    switch (adults) {
        case value:
            
            break;
    
        default:
            break;
    }


    var grainsAmount =((400/monthdivide) * kidvariable) + ((400/monthdivider) * adultsvariable);
    console.log(grainsAmount);
    document.getElementById("grainaAmount").textContent= grainsAmount;

    groups


}