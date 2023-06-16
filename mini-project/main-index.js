// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра
// має детальну інфорацію про об'єкт на який клікнули

let userBlock = document.createElement('div');
userBlock.classList.add('block');

let key = 'key';

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => users.forEach(user => {
        let div = document.createElement('div');
        div.classList.add('user');
        div.innerText = `ID: ${user.id}, Name: ${user.name}`;
        userBlock.appendChild(div);

        document.body.appendChild(userBlock);

        let btn = document.createElement('button');
        div.appendChild(btn);
        btn.classList.add('button');
        btn.innerText = 'More information';

        btn.onclick = (e) => {
                e.preventDefault();
                localStorage.setItem(key, JSON.stringify(user));
                location.href = `./user-details.html`
        }

}));

