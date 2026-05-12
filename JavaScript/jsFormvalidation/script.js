function submit(e) {
// e.preventDefault();

  const name = document.getElementById("fn").value;
  const email = document.getElementById("em").value;
  const number = document.getElementById("pn").value;
  const password = document.getElementById("ps").value;

  document.querySelectorAll("error").forEach((element) => {
    element.innerText = " ";
  });

  if (!/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("nameError").innerText = "Invalid Name";
  }
  if (!/^[A-Za-z.\_\d]+@gmail.com$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email";
  }
  if (!/^[(6-9)]\d{9}$/.test(number)) {
    document.getElementById("numberError").innerText = "Invalid Number";
  }

  console.log(
    `name = ${name} , email = ${email} + password = ${password} , number = ${number}`,
  );
}