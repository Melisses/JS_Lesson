function createElement(item, nClass, text) {
    elem = document.createElement(item);
    elem.className = nClass;
    if (text != null && text != '') elem.innerText = text;
    return elem;
}

function txtResult(text,index) {
    txt[index].value = text;
    txt[index].style.width = (txt[index].value.length + 1) * 8 + 'px';
}

async function getAPI (url) {
    let response = await fetch(url);
    let result = await response.json();
    alert(result.message);
    return result;
}

async function getTests() {
    let result = await getAPI('https://votesystem.mobius.team/api/tests');

    let tests = result.tests;
    tests.forEach(element => {
        let art = createElement('article', 'article-tests'),
        hdr = createElement('h3', 'article__header',element.label+'. '+element.text),
        ul = createElement('ul', 'article__list');

        let cnd = element.conditions;
        cnd.forEach(element => {
            let li = createElement('li', 'article__item' + (element.is_correct == 1 ? ' sucess' : ''), element.text);
            ul.appendChild(li);
        });

        art.appendChild(hdr);
        art.appendChild(ul);
        let sct = document.querySelector('.section-tests');
        sct.appendChild(art);
    })
}

async function getResult() {
    let result = await getAPI('https://votesystem.mobius.team/api/result/59');
    
    txtResult('Результат теста. Имя: ' + result.user.name + ', результат: ' + result.user.result + '%', 0);
}

function  getResultWithToken() {
    fetch('https://votesystem.mobius.team/api/result/59/token')
        .then(response => response.json())
        .then(tokens => {
            let token = tokens.token;
            var formData = new FormData();
            formData.append('token', token);
            formData.append('homework_done', true);
            fetch('https://votesystem.mobius.team/api/homework/update', {
                method: 'POST',
                body: formData
            })
            .then(answers => {
                if (answers.status >= 200 && answers.status < 300)
                    return answers.json()
                else {
                    let error = new Error(answers.status + ' - ' + answers.statusText);
                    error.response = answers;
                    alert(error);
                    throw error;
                }
            })
            .then (answer => {
                txtResult(answer, 1);
                alert(answer)
            })
            .catch(error => txtResult(error, 1))
        })
}

var txt = document.querySelectorAll('.txt_result');

window.addEventListener('load', getTests);

let myResult = document.querySelectorAll('.btn_result');
myResult[0].addEventListener('click', getResult);
myResult[1].addEventListener('click', getResultWithToken);