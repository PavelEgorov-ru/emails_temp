# Шаблон для формирования email писем

## Установка

Версия node ` 22.9.0`. Склонируй репозиторий и выполни команду `npm ci `.

## Порядок работы с проектом

В основной ветке `main` можно вносить изменения только в :

- папке `./src/pug/components`;
- в файле `./src/pug/components/layout/default.pug` для изменения параметров переменной `data`.
  Вся работа над письмом происходит в файле `./src/pug/components/layout/default.pug` в переменной `data`.
  Логика подключения компонентов для генерации письма `./src/pug/email-template.pug`.
  Итоговый вариант письма `./dist/email-template.html`

## Состав переменной data.

Из этой переменной берется глобальная информация для письма.

- `campain` - Номер кампании. Он будет подставляться в адрес для получения изображений с файл-сервера;
- `utm` - utm-метка, которая будет подставляться в ссылки;
- `bgColorEmail` - фон контентной части письма, при необходимости его можно менять;
- `promoUrl` - ссылка на общую страницу подборки или категории;
- `promoDesc` - описание страницы для атрибутов alt баннера письма;
- `promoBanner` - номер изображения баннера на файл-сервере и его расширение;
- `contetnt` - массив объектов, которые соответсвуют типовым блокам письма.

### Параметр `contetnt`.

Если кратко, это описание структуры письма сверху вниз. Что делает верстальщик, когда смотрит на макет в Figma?
Он определеяет что первая строка в письме - это баннер, затем, следующей строкой, следует блок с текстом. А вот здесь
карточки товаров по 4 штуки в ряд. В конце находится кнопка.

Разберем этот абзац подробнее.

"Он определеяет что первая строка в письме - это баннер..." Это описание может выглядеть так:

```
{
  type: 'banner',
  data: 'https://...'
},
```

"...затем, следующей строкой, следует блок с текстом ..."

```
{
  type: 'text',
  data: {
    align: 'center',
    color: 'color: #212121;',
    value: 'Представляем широкий ассортимент лент, которые можно использовать в шитье, рукоделии и оформлении подарков. Выбирайте!',
  }
},
```

"... А вот здесь карточки товаров по 4 штуки в ряд..."

```
{
  type: 'cards-4',
  size: 4,
  data: [
    {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
    {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
    {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
    {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
  ]
},
```

"... В конце находится кнопка ..."

```
{
  type: 'button',
  data: {
    text: 'Смотреть всё',
    color: 'color: #ffffff;',
    bgColor: '#1f84db',
    size:'width:149px',
  }
},
```

Общая переменная может иметь следующий вид

```
var data = {
  campain: '024736117',
  utm: '?utm_source=email&utm_medium=kp_hand&utm_campaign=024736117_upak',
  bgColorEmail: '#a3E33F',
  promoUrl: 'https://www.sima-land.ru/trademark/darite-schaste/novogodnyaya-upakovka/?sort=discount&viewtype=cards&',
  promoDesc: 'Коллекции НГ упаковки Дарите Счастье',
  promoBanner: '/0000.png',
  promoBanner_2: '/1111.png',
  content: [
    {
      type: 'banner',
      data: 'https://...'
    },
    {
      type: 'text',
      data: {
        align: 'center',
        color: 'color: #212121;',
        value: 'Представляем широкий ассортимент лент, которые можно использовать в шитье, рукоделии и оформлении подарков. Выбирайте!',
      }
    },
    {
      type: 'cards-4',
      size: 4,
      data: [
        {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
        {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
        {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
        {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
      ]
    },
    {
      type: 'button',
      data: {
        text: 'Смотреть всё',
        color: 'color: #ffffff;',
        bgColor: '#1f84db',
        size:'width:149px',
      }
    },
  ]
}
```

Далее следует из терминала вызвать команду `npm run dev`. В результате получить готвый файл `./dist/email-template.html`.

Контракты компонентов будут описаны позднее. Сам принцип, я думаю, ясен.)))
