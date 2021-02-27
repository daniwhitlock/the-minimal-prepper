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
    var goal;
    switch (time) {
        case "1":
            monthdivider = .0833;
            goal= "1 Month";
            break;
        case "3":
            monthdivider = .25;
            goal = "3 Months";
            break;
        case "6":
            monthdivider = .5;
            goal = "6 Months";
            break;
        case "9":
            monthdivider = .75;
            goal = "9 Months";
            break;
        case "12":
            monthdivider = 1;
            goal = "1 Year";
            break;    
        default:
            break;
    }
    console.log("monthdivider: " + monthdivider);
   
    var grainsAmount =(((400*monthdivider) * (kids *.7)) + ((400*monthdivider) * adults)).toFixed(2);
    console.log(grainsAmount);
    document.getElementById("grainsAmount").textContent = grainsAmount;

    var legumesAmount = (((60*monthdivider) * (kids *.7)) + ((60*monthdivider) * adults)).toFixed(2);
    console.log(legumesAmount);
    document.getElementById("legumesAmount").textContent = legumesAmount;

    var milkAmount = (((16*monthdivider) * (kids *.7)) + ((16*monthdivider) * adults)).toFixed(2);
    console.log(milkAmount);
    document.getElementById("milkAmount").textContent = milkAmount;

    var sugarAmount = (((60*monthdivider) * (kids *.7)) + ((60*monthdivider) * adults)).toFixed(2);
    console.log(sugarAmount);
    document.getElementById("sugarAmount").textContent = sugarAmount;

    var fatsAmount = (((20*monthdivider) * (kids *.7)) + ((20*monthdivider) * adults)).toFixed(2);
    console.log(fatsAmount);
    document.getElementById("fatsAmount").textContent = fatsAmount;

    var fruitsVeggiesAmount = (((90*monthdivider) * (kids *.7)) + ((90*monthdivider) * adults)).toFixed(2);
    console.log(fruitsVeggiesAmount);
    document.getElementById("fruitsVeggiesAmount").textContent = fruitsVeggiesAmount;

    var saltAmount = (((8*monthdivider) * (kids *.7)) + ((8*monthdivider) * adults)).toFixed(2);
    console.log(fruitsVeggiesAmount);
    document.getElementById("saltAmount").textContent = saltAmount;

    var waterAmount = (((365*monthdivider) * (kids *.7)) + ((365*monthdivider) * adults)).toFixed(2);
    console.log(waterAmount);
    document.getElementById("waterAmount").textContent = waterAmount;


    document.getElementById("timeGoal").textContent = goal;

}
