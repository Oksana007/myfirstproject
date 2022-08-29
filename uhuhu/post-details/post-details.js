(function setUserInfo() {
    const obj = JSON.parse(window.localStorage.getItem('post-info'));
    let div = document.getElementById('post-info');
    getAllComments()
    Object.keys(obj).forEach(function (key) {
        div.appendChild(createUserData(key, obj[key]))
    });
})()

function createUserData(elementName, element) {
    const name = document.createElement('div');
    name.innerText = `${elementName}: ${element}`;
    return name;
}

function getAllComments() {
    const postId = JSON.parse(window.localStorage.getItem('post-info')).id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then((data) => generateComments(data));
}


function generateComments(data) {
    data.forEach((item) => {
        const postItem = document.getElementById('comment-container');
        const newPostItem = document.createElement('div');
        const postTitleItem = document.createElement('div');
        const postBodyItem = document.createElement('div');
        const postEmailItem = document.createElement('div');
        newPostItem.className = 'item'
        postBodyItem.className = 'body';
        postTitleItem.className = 'title';
        postBodyItem.innerText = item.body;
        postTitleItem.innerText = item.name;
        postEmailItem.innerText = item.email;
        newPostItem.appendChild(postTitleItem);
        newPostItem.appendChild(postBodyItem);
        newPostItem.appendChild(postEmailItem);
        postItem.appendChild(newPostItem);
    })
}