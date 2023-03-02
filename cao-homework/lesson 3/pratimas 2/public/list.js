const peopleList = document.getElementById("peopleList");

fetch("http://localhost:3000/people")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error fetching people");
  })
  .then((people) => {
    peopleList.innerHTML = "";
    people.forEach(({ name, surname }) => {
      const li = document.createElement("li");
      li.textContent = `${name} ${surname}`;
      peopleList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error(error);
    alert(error.message);
  });