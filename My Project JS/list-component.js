fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => getList(data));


function getList(data) {
  console.log(data)
  const itemContainer = document.getElementById('items-container');
  data.forEach(element => {
    const main = document.createElement('div');
    const subMain = document.createElement('div');
    main.className = 'list-container-item';
    subMain.className = 'sub-container';
    subMain.appendChild(getId(element));
    subMain.appendChild(getName(element));
    main.appendChild(subMain);
    itemContainer.appendChild(main)
    main.appendChild(getButton(element))
  });
}

function getId(element) {
  const id = document.createElement('div');
  id.innerText = `id: ${element.id}`;
  return id;
}

function getName(element) {
  const name = document.createElement('div');
  name.innerText = `Name: ${element.name}`;
  return name;
}

function getButton(element) {
  const button = document.createElement('a');
  button.onclick = function () {
    window.localStorage.setItem('item', JSON.stringify(element));
  }
  button.href =  '../my%20project%20js/user-details/user-details.html';
  button.innerText = 'Show info';
  button.className = 'item-button';
  return button;
}
