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

function getAPI(urlApi) {
    try {
        return fetch(urlApi).then(result => result.json());
    } catch(e) {
        return alert(e.name + ": " + e.message);
    }
}

async function getTests() {
    let result = await getAPI('https://votesystem.mobius.team/api/tests');
    //alert(result.message);
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
    //alert(result.message);
    txtResult('Результат теста. Имя: ' + result.user.name + ', результат: ' + result.user.result + '%', 0);
}

function* getResultWithToken() {
    yield fetch('https://votesystem.mobius.team/api/result/59/token')
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
                //alert(answer)
            })
            .catch(error => txtResult(error, 1))
        })
}

function* myGenerator() {
    yield getTests();
    yield getResult();
    yield* getResultWithToken();
}

var txt = document.querySelectorAll('.txt_result');
let myResult = document.querySelectorAll('.btn_result');

myResult[0].addEventListener('click', () => {
    res = myGenerator();
    for(let value of res)
        res.next();    
});


function* genItem(start, end) {
    min = Math.ceil(start);
    max = Math.floor(end);
    yield Math.floor(Math.random() * (max - min + 1)) + min;
}

function* genPassword(kol) {
    if (isNaN(kol)) kol = 8;
    arr = [[48, 57] , [65, 90], [97, 122]]
    for (let i = 0; i < kol; i++) {
        let rand = Math.floor(Math.random() * arr.length);
        rand = arr[rand];
        yield* genItem(rand[0], rand[1])
    }
}

function setPassword() {
    let passKol = genPassword(txt[2].value)
    let str = '';
    for(let code of passKol)  {
        str += String.fromCharCode(code);
    }
  
    txt[2].value = str;   
}

myResult[1].addEventListener('click', setPassword);