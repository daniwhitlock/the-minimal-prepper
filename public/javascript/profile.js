// Set up equations
document.getElementById("pantry-save").addEventListener("click", async function () {

    // grab values from drop down #pantry-save modal
    var numberofKids = document.getElementById("numberofKids").value;
    var numberofAdults = document.getElementById("numberofAdults").value;
    var lengthofTime = document.getElementById("lengthofTime").value;

    let response = await fetch('api/users/pantry', {
        method: 'PUT',
        body: JSON.stringify({
            underseven: numberofKids,
            overSeven: numberofAdults,
            weeksPrep: lengthofTime
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
        console.log("good to go");
    } else {
        console.log("cannot read changed data");
    }

});

document.querySelector('.checkboxListener').addEventListener("click", async function () {

    console.log("clicked---------------")
    var pgone = document.getElementById("checkGrains").checked;
    var pgtwo = document.getElementById("checkLegumes").checked;
    var pgthree = document.getElementById("checkMilk").checked;
    var pgfour = document.getElementById("checkSugar").checked;
    var pgfive = document.getElementById("checkFats").checked;
    var pgsix = document.getElementById("checkFruitsVeggies").checked;
    var pgseven = document.getElementById("checkSalt").checked;
    var pgeight = document.getElementById("checkWater").checked;
    console.log(pgone)
    let response = await fetch('api/users/checkbox', {
        method: 'PUT',
        body: JSON.stringify({
            pg_one: pgone,
            pg_two: pgtwo,
            pg_three: pgthree,
            pg_four: pgfour,
            pg_five: pgfive,
            pg_six: pgsix,
            pg_seven: pgseven,
            pg_eight: pgeight,
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        // document.location.reload();
        console.log("good to go");
    } else {
        console.log("cannot read changed data");
    }
});



// function updatePantry(kids, adults, time) {

// // async function pantryCalculator(kids, adults, time) {
// //     var monthdivider;
// //     var goal;
// //     switch (time) {
// //         case "1":
// //             monthdivider = .0833;
// //             goal = "1 Month";
// //             break;
// //         case "3":
// //             monthdivider = .25;
// //             goal = "3 Months";
// //             break;
// //         case "6":
// //             monthdivider = .5;
// //             goal = "6 Months";
// //             break;
// //         case "9":
// //             monthdivider = .75;
// //             goal = "9 Months";
// //             break;
// //         case "12":
// //             monthdivider = 1;
// //             goal = "1 Year";
// //             break;
// //         default:
// //             break;
// //     }
// //     // document.getElementById("timeGoal").textContent = goal;
// //     // console.log("monthdivider: " + monthdivider);

// //     var grainsAmount = (((400 * monthdivider) * (kids * .7)) + ((400 * monthdivider) * adults)).toFixed(1);
// //     // console.log(grainsAmount);
// //     // document.getElementById("grainsAmount").textContent = grainsAmount;

// //     var legumesAmount = (((60 * monthdivider) * (kids * .7)) + ((60 * monthdivider) * adults)).toFixed(1);
// //     // console.log(legumesAmount);
// //     // document.getElementById("legumesAmount").textContent = legumesAmount;

// //     var milkAmount = (((16 * monthdivider) * (kids * .7)) + ((16 * monthdivider) * adults)).toFixed(1);
// //     // console.log(milkAmount);
// //     // document.getElementById("milkAmount").textContent = milkAmount;

// //     var sugarAmount = (((60 * monthdivider) * (kids * .7)) + ((60 * monthdivider) * adults)).toFixed(1);
// //     // console.log(sugarAmount);
// //     // document.getElementById("sugarAmount").textContent = sugarAmount;

// //     var fatsAmount = (((20 * monthdivider) * (kids * .7)) + ((20 * monthdivider) * adults)).toFixed(1);
// //     // console.log(fatsAmount);
// //     // document.getElementById("fatsAmount").textContent = fatsAmount;

// //     var fruitsVeggiesAmount = (((90 * monthdivider) * (kids * .7)) + ((90 * monthdivider) * adults)).toFixed(1);
// //     // console.log(fruitsVeggiesAmount);
// //     // document.getElementById("fruitsVeggiesAmount").textContent = fruitsVeggiesAmount;

// //     var saltAmount = (((8 * monthdivider) * (kids * .7)) + ((8 * monthdivider) * adults)).toFixed(1);
// //     // console.log(saltAmount);
// //     // document.getElementById("saltAmount").textContent = saltAmount;

// //     var waterAmount = (((365 * monthdivider) * (kids * .7)) + ((365 * monthdivider) * adults)).toFixed(1);
// //     // console.log(waterAmount);
// //     // document.getElementById("waterAmount").textContent = waterAmount;

// //     // fetch.profile
// //     const pantryresponse = await fetch('/profile', {
// //         method: 'put',
// //         body: JSON.stringify({
// //             kids,
// //             adults,
// //             time,
// //             goal,
// //             grainsAmount,
// //             legumesAmount,
// //             milkAmount,
// //             sugarAmount,
// //             fatsAmount,
// //             fruitsVeggiesAmount,
// //             saltAmount,
// //             waterAmount
// //         }),

// //         headers: { 'Content-Type': 'application/json' }
// //     });
// //     if (pantryresponse.ok) {
// //         location.reload();
// //         console.log("good to go");
// //     } else {
// //         console.log("cannot read changed data");
// //     }
// // }

