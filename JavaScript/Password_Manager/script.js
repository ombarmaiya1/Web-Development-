document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const websiteName = document.getElementById("websiteName").value;
  // console.log(websiteName);
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const save = document.getElementById("save");
  const clear = document.getElementById("clear");

  let packet = {
    WebsiteName: websiteName,
    UserName: userName,
    Password: password,
  };
  function saveToLocalStorage() {
    let savedPasswords =
      JSON.parse(localStorage.getItem("savedPasswords")) || [];
    savedPasswords.push(packet);

    savedPasswords = JSON.stringify(savedPasswords);

    localStorage.setItem("savedPasswords", savedPasswords);
  }

  function clearInput() {
    () => {
      document.getElementById("websiteName").value = "";
      document.getElementById("userName").value = "";
      document.getElementById("password").value = "";
    };
  }

  saveToLocalStorage();
  clearInput();

  // function getPasswords() {
  //   const passwords = localStorage.getItem("savedPasswords");
  // }

  // save.addEventListener('click',() =>{

  //     saveToLocalStorage()
  // });

  clear.addEventListener("click", clearInput);
});
