(function setUserInfo() {
    const obj = JSON.parse(window.localStorage.getItem('item'));
    let div = document.getElementById('container-info');
    Object.keys(obj).forEach(function (key) {
        div.appendChild(createUserData(key, obj[key]))
    });
})()

function createUserData(elementName, element) {
    if (elementName === 'company') {
        element = `${element.bs}, ${element.catchPhrase}, ${element.name}`
    }
    if (elementName === 'address') {
        element = `${element.city}, ${element.street}, ${element.suite}, ${element.zipcode}, ${element.geo.lat}-${element.geo.lng}`

    }
    const name = document.createElement('div');
    name.innerText = `${elementName}: ${element}`;
    return name;
}

function getPosts() {
    const userId = JSON.parse(window.localStorage.getItem('item')).id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then((data) => generatePostItem(data));
}

function generatePostItem(data) {
    data.forEach((item) => {
        const postItem = document.getElementById('post-item');
        const newPostItem = document.createElement('div');
        const postTitleItem = document.createElement('div');
        const postBodyItem = document.createElement('div');
        newPostItem.className = 'item'
        postBodyItem.className = 'body';
        postTitleItem.className = 'title';
        postBodyItem.innerText = item.body;
        postTitleItem.innerText = item.title;
        newPostItem.appendChild(postTitleItem);
        newPostItem.appendChild(postBodyItem);
        newPostItem.appendChild(getButton(item));
        postItem.appendChild(newPostItem);
    })
}


function getButton(element) {
    const button = document.createElement('a');
    button.onclick = function () {
        window.localStorage.setItem('post-info', JSON.stringify(element));
    }
    button.href = '../post-details/post-details.html';
    button.innerText = 'Show info';
    button.className = 'item-button';
    return button;
}
