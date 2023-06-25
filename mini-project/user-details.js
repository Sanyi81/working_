// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post.html,
// котра має детальну інфу про поточний пост.

let detailsBlock = document.createElement('div');
detailsBlock.classList.add('details_block')
let div = document.createElement('div');
div.classList.add('user_info');
detailsBlock.appendChild(div);

document.body.appendChild(detailsBlock);


let key = 'key';

let user = JSON.parse(localStorage.getItem(key));
console.log(user)

function formUser(user) {
        for (const userElement in user) {
            if (typeof user[userElement] !== 'object')  {
               let userDiv = document.createElement('div');
               userDiv.innerText = `${userElement}: ${user[userElement]}`;
               userDiv.classList.add('user_info');
               div.appendChild(userDiv);
            } else {
                formUser(user[userElement]);
            }
        }
}
formUser(user);

let postsBtn = document.createElement('button');
postsBtn.innerText = 'Posts';
postsBtn.classList.add('post_button');
div.appendChild(postsBtn);

let postsDiv = document.createElement('div');

postsDiv.classList.add('posts_info');
document.body.appendChild(postsDiv);

postsBtn.onclick = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.innerText = `ID:${post.id} / Post: ${post.title}`;
            postDiv.classList.add('post_div');
            postsDiv.appendChild(postDiv);

            let postBtn = document.createElement('button');
            // postBtn.innerText = 'Details';
            postDiv.appendChild(postBtn);

            let a = document.createElement('a');
            a.href = `./post.html`;
            a.innerText = 'Post of current user';
            postBtn.appendChild(a);
        }
    });
}