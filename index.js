const insertText = function(text, item) {
  item.innerHTML = text.replace(/\n/g, '<br>');
}

const createElement = function(item, nClass, text, pSrc, pAlt) {
  let elem = document.createElement(item);
  elem.className = nClass;

  if (text != null && text != '') insertText(text, elem);

  if (text != null && text != '') elem.src = pSrc;

  if (text != null && text != '') elem.alt = pAlt;

  return elem;
}

//*****************************************header*************************************************
let ul = createElement('ul', 'header-article__list');
  ul.appendChild(createElement('li','header-article__item','Создана новая ветка JS_4 в JS_Lesson')); 
  ul.appendChild(createElement('li','header-article__item','Создан файл index.js'));
  ul.appendChild(createElement('li','header-article__item','Модифицирован файл index.html'));
  ul.appendChild(createElement('li','header-article__item','Сайт теперь построен из index.js'));

let article = createElement('article','article header-article article_color');
article.appendChild(createElement('h1','header-article__title','Домашнее задание №6. Сайт из JS'));
article.appendChild(ul);

let section = createElement('section','section');
section.appendChild(createElement('img','section__img',0,'assets/fonshapki.jpg'));
section.prepend(article);

let header = createElement('header','header header_color');
header.appendChild(section);
//************************************************************************************************

//*****************************************footer*************************************************
let address = createElement('address','footer-address');
insertText('Мои контакты: <br> e-mail: stek-ira@i.ua <br> telegramm: stek-ira <br> telefon: +38 050 xxx xx xx ', address);

section = createElement('section','section footer-section');
section.appendChild(address);

let footer = createElement('footer','footer footer_color');
footer.appendChild(section);
//************************************************************************************************

//******************************************main**************************************************
let main = createElement('main', 'content');

let paragraf1 = createElement('p','text article-itsme__text');
txt = 'Привет, меня зовут Ирина Стек. Я - начинающий веб-дизайнер и квалифицированный '+
        'прикладной программист. Увлекаться разработкой сайтов я начала с 2015 года и занималась самообучением'+
        'насколько позволяла мне основная работа программиста и обычная бюрократия в работе любого предприятия. '+
        'С 2020 года я решила плотно заняться повышением квалификации в области веб-дизайна и '+
        'переквалифицироваться на разработчика frontend и backend.'
insertText(txt,paragraf1);

paragraf2 = createElement('p','text article-itsme__text');
txt = 'Мои основные качества: ответственность, пунктуальность, сосредоточенность, '+
        'коммуникабельность, трудолюбие, инициативность, креативность. У меня прекрасный сын,'+
        '2 любимицы-кошки и много цветущих растений.'
insertText(txt,paragraf2);

article = createElement('article','article article-itsme');
article.appendChild(createElement('h1','title','Обо мне'));
article.appendChild(paragraf1);
article.appendChild(paragraf2);

section = createElement('section', 'section section-itsme');
section.appendChild(article);
section.prepend(createElement('img','section-itsme__img',0,'assets/img-1.jpg'));

main.appendChild(section);
//************************************************************************************************
ul1 = createElement('ul', 'article-aboutme__list');
txt = 'В связи с тем, что не было возможности '+
        'тратить деньги на дорогое обучение, я осваивала азы фронтэнда и бэкэнда самостоятельно, '+
        'из-за чего иногда самообучение проходило медленно и трудоёмко. Но получение новых знаний '+
        'для меня проходило с открытием новых сюрпризов и секретов, о которых изначально я не знала '+
        'или не было указано в учебных статьях. '
ul1.appendChild(createElement('li','article-aboutme__item',txt));

txt = 'Окончила с красным дипломом в 2002 году Северодонецкий технологический институт '+
        'Восточно-украинского государственного университета им. В. Даля, получив специальность '+
        '«программист системный». Работать по профессии начала сразу на государственном коммунальном '+
        'предприятии. Реализовала много проектов прикладных программ для бухгалтерии, настроила работу '+
        'абонентного отдела по технологии клиент-сервер, разбиралась и настраивала сторонние программные '+
        'продукты, использовавшиеся на предприятии. Получила много благодарностей и грамот за работу, '+
        'дважды награждали почётными грамотами города.'
ul1.appendChild(createElement('li','article-aboutme__item',txt));

txt = 'Параллельно создала зарплатный проект для Северодонецкого троллейбусного управления и программу-учёта '+
        'для предприятия, устанавливающего домофоны. С последним работаю удалённо до сих пор.'
ul1.appendChild(createElement('li','article-aboutme__item',txt));

txt = 'На данный момент все мои программные продукты продолжают благополучно эксплуатироваться '+
        'и работают без сбоев.'
ul1.appendChild(createElement('li','article-aboutme__item',txt));

let div1 = createElement('div','article-aboutme__column');
div1.appendChild(ul1);

ul2 = createElement('ul', 'article-aboutme__list');
txt = 'Первый свой сайт я написала в 2015 году. Но, как и положено сайту новичка, он не был идеален и не особо '+
        'выделялся дизайном и плюшками. Это был сайт Единого расчётного центра, где жители могли смотреть свои '+
        'задолженности по коммунальным услугам. Я разработала для ЕРЦ Информационный лист, который каждое '+
        'домохозяйство и по сей день получает каждый месяц.'
ul2.appendChild(createElement('li','article-aboutme__item',txt));

txt = 'Второй моей работой была программа учёта для домофонов во всемирной паутине. Она была уже более '+
        'функциональной и с использованием фреймворка bootstrap 3. Последний год я переписываю эту работу с '+
        'ещё более продвинутым дизайном и удобством для эксплуатации. '
ul2.appendChild(createElement('li','article-aboutme__item',txt));

txt = 'Сейчас работаю в Городском совете в отделе АСУ и ТО. Но работа больше административно-бумажная. '+
        'С осени 2019 года мне вменили обязанность обслуживания городского сайта на облачном сервисе. '+
        'Соответственно, в (по возможности) свободное время изучаю это абсолютно неизвестную и пока непонятную '+
        'мне технологию.  '
ul2.appendChild(createElement('li','article-aboutme__item',txt));

txt = 'В конце 2019 года я познакомилась с командой Kreative IT School, у которой прошла конкурс на зачисление на '+
        'курсы веб-дизайна. Организованность и инициативность ребят из команды меня особенно впечатляют и мотивируют. '+
        'Уже на первом занятии я открыла для себя много нового и это ещё больше укрепило меня в стремлении '+
        'заниматься дальше и постигать новое.'
ul2.appendChild(createElement('li','article-aboutme__item',txt));

let div2 = createElement('div','article-aboutme__column');
div2.appendChild(ul2);

article = createElement('article','article article-aboutme');
article.appendChild(div1);
article.appendChild(div2);

section = createElement('section', 'section section-aboutme section_color');
section.appendChild(createElement('h2','title title_center','Мои достижения'));
section.appendChild(article);

main.appendChild(section);
//************************************************************************************************
article = createElement('article','article article-skills');

let div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/html.png'));
div.appendChild(createElement('h3','title_center article__title','90%'));
article.appendChild(div);

div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/CSS3.png'));
div.appendChild(createElement('h3','title_center article__title','80%'));
article.appendChild(div);

div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/php.png'));
div.appendChild(createElement('h3','title_center article__title','75%'));
article.appendChild(div);

div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/js.png'));
div.appendChild(createElement('h3','title_center article__title','50%'));
article.appendChild(div);

div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/jquery.png'));
div.appendChild(createElement('h3','title_center article__title','70%'));
article.appendChild(div);

div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/Mysql.png'));
div.appendChild(createElement('h3','title_center article__title','95%'));
article.appendChild(div);

div = createElement('div','article-skills__column');
div.appendChild(createElement('img','article__img',0,'assets/bootstrap.png'));
div.appendChild(createElement('h3','title_center article__title','75%'));
article.appendChild(div);

section = createElement('section', 'section section-skills');
section.appendChild(createElement('h2','title title_center','Мои навыки'));
section.appendChild(article);

main.appendChild(section);
//************************************************************************************************
document.body.appendChild(header);
document.body.appendChild(footer);
document.body.insertBefore(main, footer);
