// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

let commentsBlock = document.createElement('div');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(resolve => resolve.json())
    .then(comments => {
        let div = document.createElement('div');

        for (const comment of comments) {

            let postId = document.createElement('p');
            postId.innerText = `Post ID: ${comment.postId}`;
            div.appendChild(postId);

            let id = document.createElement('p');
            id.innerText = `ID: ${comment.id}`;
            div.appendChild(id);

            let name = document.createElement('p');
            name.innerText = `Name: ${comment.name}`;
            div.appendChild(name);

            let email = document.createElement('p');
            email.innerText = `Email: ${comment.email}`;
            div.appendChild(email);

            let body = document.createElement('p');
            body.innerText = `Body: ${comment.body}`;
            div.appendChild(body);

            let line = document.createElement('p');

            line.innerText = '==================================================================================================';
            div.appendChild(line);

            commentsBlock.appendChild(div);

            document.body.appendChild(commentsBlock);
        }
    });
