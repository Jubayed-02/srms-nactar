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
  const valid_bangla = !bangla || 0 >= bangla || bangla > 100;
  const valid_english = !english || 0 >= english || english > 100;
  const valid_math = !math || math > 100;
  const valid_science = !science || science > 100;
  const valid_ict = !ict || ict > 100;
  let valid = true;
  let total;
  let avg;
  let grade;
  let invalid_text = document.getElementsByClassName("custom-text");
  switch (true) {
    case !name.trim():
      // window.alert("Please Enter your full name");
      valid = false;
      invalid_text[0].textContent = "!";

    case valid_bangla:
      // window.alert("Invalid input in Bangla");
      invalid_text[1].textContent = "!";

      valid = false;
    case valid_english:
      // window.alert("Invalid input in English");
      invalid_text[2].textContent = "!";
      valid = false;
    case valid_math:
      // window.alert("Invalid input in Math");
      invalid_text[3].textContent = "!";

      valid = false;
    case valid_science:
      // window.alert("Invalid input in Science");
      invalid_text[4].textContent = "!";

      valid = false;
    case valid_ict:
      // window.alert("Invalid input in ICT");
      invalid_text[5].textContent = "!";

      valid = false;
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
}
