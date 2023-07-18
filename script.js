
function calculateBMI(weight, height) {
  var heightInMeters = height / 100;

  var bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
}

function displayBMIResult(bmi, gender) {
  var resultElement = document.getElementById("result");
  var message;

  if (gender === "male") {
    if (bmi < 20.7) {
      message = "Anda Terlalu Kurus... Coba makan dah";
    } else if (bmi < 26.4) {
      message = "Berat Anda Berada di batas Normal";
    } else if (bmi < 27.8) {
      message = "Agak berat";
    } else if (bmi < 31.1) {
      message = "Terlalu Berat";
    } else {
      message = "Obesitas sia boyyyy";
    }
  } else {
    if (bmi < 19.1) {
      message = "Anda Terlalu Kurus... Coba makan dah";
    } else if (bmi < 25.8) {
      message = "Berat Anda Berada di batas Normal";
    } else if (bmi < 27.3) {
      message = "Agak berat";
    } else if (bmi < 32.3) {
      message = "Terlalu Berat";
    } else {
      message = "Obesitas sia boyyyy";
    }
  }

  resultElement.textContent = "Hasil BMI: " + bmi + " (" + message + ")";
}
function handleFormSubmit(event) {
  event.preventDefault();

  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var genderInput = document.getElementById("gender");

  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);
  var gender = genderInput.value;

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid weight and height.");
    return;
  }

  var bmi = calculateBMI(weight, height);
  displayBMIResult(bmi, gender);
}
var bmiForm = document.getElementById("bmiForm");
bmiForm.addEventListener("submit", handleFormSubmit);
