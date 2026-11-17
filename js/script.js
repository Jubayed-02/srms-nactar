// global variables
let valid;
let total;
let avg;
let grade;
const mymodal = document.getElementById("exampleModal");
const modal = new bootstrap.Modal(mymodal);

// provided by bootstrap to focus the modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");
myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

function checkResult() {
  // input fields
  const name = document.getElementById("inputname").value;
  const bangla = parseInt(document.getElementById("inputscorebangla").value);
  const english = parseFloat(
    document.getElementById("inputscoreenglish").value,
  );
  const math = parseFloat(document.getElementById("inputscoremath").value);
  const science = parseFloat(
    document.getElementById("inputscorescience").value,
  );
  const ict = parseFloat(document.getElementById("inputscoreict").value);

  // input validation
  const invalid_bangla = !bangla || 0 >= bangla || bangla > 100;
  const invalid_english = !english || 0 >= english || english > 100;
  const invalid_math = !math || math > 100;
  const invalid_science = !science || science > 100;
  const invalid_ict = !ict || ict > 100;

  let invalid_text = document.getElementsByClassName("custom-text");
  // input authentication
  if (!name.trim()) {
    invalid_text[0].textContent = "!";
    valid = false;
  } else {
    invalid_text[0].textContent = "";
    valid = true;
  }
  if (invalid_bangla) {
    invalid_text[1].textContent = "!";
    valid = false;
  } else {
    invalid_text[1].textContent = "";
    valid = true;
  }
  if (invalid_english) {
    invalid_text[2].textContent = "!";
    valid = false;
  } else {
    invalid_text[2].textContent = "";
    valid = true;
  }
  if (invalid_math) {
    invalid_text[3].textContent = "!";
    valid = false;
  } else {
    invalid_text[3].textContent = "";
    valid = true;
  }
  if (invalid_science) {
    invalid_text[4].textContent = "!";
    valid = false;
  } else {
    invalid_text[4].textContent = "";
    valid = true;
  }
  if (invalid_ict) {
    invalid_text[5].textContent = "!";
    valid = false;
  } else {
    invalid_text[5].textContent = "";
    valid = true;
  }
  // valid or invalid

  // pass logics
  const pass_bangla = bangla >= 33;
  const pass_english = english >= 33;
  const pass_math = math >= 33;
  const pass_science = science >= 33;
  const pass_ict = ict >= 33;

  // logic to check fail or not
  let fail;
  if (pass_bangla && pass_english && pass_math && pass_ict && pass_science) {
    fail = false;
  } else {
    fail = true;
  }

  // checking failed or passed and assigning value
  if (!fail) {
    total = bangla + english + math + science + ict;
    avg = total / 5;
  } else {
    total = "";
    avg = "";
    grade = "F";
  }

  // grade check if passed
  if (!fail) {
    switch (true) {
      case avg >= 80:
        grade = "A+";
        break;
      case avg >= 70:
        grade = "A";
        break;
      case avg >= 60:
        grade = "A-";
        break;
      case avg >= 50:
        grade = "B";
        break;
      case avg >= 40:
        grade = "C";
        break;
      case avg >= 33:
        grade = "D";
        break;
    }
  }

  // output

  // defining variable to contain the output texts
  let output_name = document.getElementById("oname");
  let output_marks = document.getElementById("otmarks");
  let output_avg = document.getElementById("oavg");
  let output_grade = document.getElementById("ofinalgrade");
  let output_status = document.getElementById("ostatus");

  // setting the values for the output
  output_name.textContent = name;
  output_marks.textContent = total;
  output_avg.textContent = avg;
  output_grade.textContent = grade;
  output_status.textContent = fail ? "Failed" : "Passed";

  if (valid) {
    // only now open the modal

    modal.show();
  }
}
document.getElementById("myButton").addEventListener("click", checkResult);
