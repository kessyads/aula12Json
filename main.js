
fetch('https://663c040117145c4d8c34f855.mockapi.io/animals')
.then(response => response.json())
.then(data => {
    const animalList = document.getElementById("animal-list");

    data.forEach (animal => {
        const li = document.createElement('li'); 
            li.textContent = `Id: ${animal.id}, Nome: ${animal.name}, Idade: ${animal.age}, Espécie: ${animal.species}`;
            animalList.appendChild(li);
        });

    })
    .catch(error => console.error('Erro ao buscar os dados:', error));

