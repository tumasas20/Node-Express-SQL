fetch('http://localhost:8080/cars')
      .then(response => {
        return response.json();
      }).then(data => {
        let carList = document.getElementById('carList');
        data.forEach(car => {
          let li = document.createElement('li');
          li.textContent = car;
          carList.appendChild(li);
        });
      });