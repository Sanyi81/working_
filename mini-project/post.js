// На странице post.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href);
let id = url.searchParams.get('id');

let detailsBlock = document.createElement('div');
detailsBlock.classList.add('block');

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {

        let div = document.createElement('div');
        div.classList.add('posts')

        for (const post of posts) {

            let userId = document.createElement('p');
            userId.innerText = `User ID: ${post.userId}`;
            div.appendChild(userId);

            let id = document.createElement('p');
            id.innerText = `ID: ${post.id}`;
            div.appendChild(id);

            let title = document.createElement('p');
            title.innerText = `Title: ${post.title}`;
            div.appendChild(title);

            let body = document.createElement('p');
            body.innerText = `Body: ${post.body}`;
            div.appendChild(body);


            let btn = document.createElement('button');
            btn.classList.add('btn')
            div.appendChild(btn);

            let a = document.createElement('a');
            a.href = `./post-details.html?id=${post.id}`;
            a.innerText = 'Comments';

            btn.appendChild(a);

            detailsBlock.appendChild(div);

            document.body.appendChild(detailsBlock);
        }
    });