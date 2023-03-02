const addPersonForm = document.getElementById("addPersonForm");



addPersonForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addPersonForm);
  const name = formData.get("name");
  const surname = formData.get("surname");
  

  fetch("http://localhost:3000/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname }),
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
        
      }
      throw new Error("Error adding person");
    })
    .then((data) => {
        alert(data);
        addPersonForm.reset();
        window.location.href="./list.html";
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
});

