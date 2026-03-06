function calculateBMI() {

    let heightcm = prompt("Enter your height in centimeters(eg,175):");
    let weight = prompt("Enter your weight in kilograms:");

    let heightmeters = heightcm / 100;
    let bmi = weight / (heightmeters * heightmeters);
    document.getElementById("result").innerHTML =
        "Your BMI is: " + bmi.toFixed(2);
}