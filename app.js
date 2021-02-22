document.querySelector('input').addEventListener('keyup', fetchUsers);

async function fetchUsers() {
    const users = await fetch(`https://api.github.com/users/${document.querySelector('input').value}`);
    const data = await users.json();
    if(data.message !== "Not Found") {
        showData(data);
    }
    else {
        showAlert();
    }
}

function showData(data) {
    console.log(data);
    document.querySelector('.output').innerHTML = `
        <div class = 'row'>
            <div class= 'col-md-3 d-flex'>
            <img src= '${data.avatar_url}' class="img-fluid"> 
            </div>
            <div class= 'col-md-9'>
                <div class = 'text-center '>
                    <span class="btn btn-primary m-3">
                    Repositories 
                    <span class="badge badge-light">${data.public_repos}</span>
                    </span>
                    <span class="btn btn-success m-3">
                    Gists
                    <span class="badge badge-light">${data.public_gists}</span>
                    </span>
                    <span class="btn btn-warning m-3">
                    Followers
                    <span class="badge badge-light">${data.followers}</span>
                    </span><span class="btn btn-secondary m-3">
                    Following 
                    <span class="badge badge-light">${data.public_repos}</span>
                    </span>
                </div>
                <ul class="list-group">
                    <li class="list-group-item"> <span class="fs-5">Name:</span> ${data.name}</li>
                    <li class="list-group-item"> <span class="fs-5">Bio:</span> ${data.bio} </li>
                    <li class="list-group-item"> <span class="fs-5">Company:</span> ${data.company} </li>
                    <li class="list-group-item"> <span class="fs-5">City:</span> ${data.location} </li>
                    <li class="list-group-item"> <span class="fs-5">Created-at:</span> ${data.created_at} </li>
                </ul>
            </div>
        </div>
    `;
}
function showAlert(){
    const div = document.createElement('div');
    const parent = document.querySelector('error');
    const before = document.querySelector(".output")
    div.appendChild(document.createTextNode('User not found!'))
    parent.insertBefore(div, before);
}