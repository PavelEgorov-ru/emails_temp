# Шаблон для формирования email писем

## Установка

Версия node ` 22.9.0`. Склонируй репозиторий и выполни команду `npm ci `.

## Порядок работы с проектом

В основной ветке `main` можно вносить изменения только в :

- папке `./src/pug/components`;
- в файле `./src/pug/components/layout/default.pug` для изменения параметров переменной `data`.

Для создания нового шаблона необходимо создать отдельную ветку. После его готовности сделать PR. Ветки шаблонов не будут вливаться в основную.

## Состав переменной data.

Основная информация для письма берется из этой переменной.

- `campain` - Номер кампании. Он будет подставляться в адрес для получения изображений с файл-сервера;
- `utm` - utm-метка, которая будет подставляться в ссылки;
- `bgColorEmail` - фон контентной части письма, при необходимости его можно менять;
- `promoUrl` - ссылка на общую страницу подборки или категории;
- `promoDesc` - описание страницы для атрибутов alt баннера письма;
- `promoBanner` - номер изображения баннера на файл-сервере и его расширение;
- `size` - сетка, которая будет ипользоваться для отображения карточек товара;
- `text` - пример переменной для текстового блока. В ней нужно указать положение текста (left, center, right), цвет текста для тега style и само содержание;
- `head_1` - пример переменной для заголовка. Назначение полей как для текста;
- `button_1` - пример переменной для кнопки. В ней можно указать текст, цвет текста, цвет фона, разимер кнопки и ссылку на страницу сайта;

Для карточек используются разные структуры данных.

### сетка по 4 карточки

Отрисовка секции происходит построчно по 4 карточки. В переменной должен быть массив объектов с ключом `row`. Значение ключа - массив объектов со следующими полями:

- `name` - наименование карточки. Будет отображаться текстом и использоваться в атрибуте alt для изображения. Если необходимо перенсти текст, тег br указать прямо в значении: `Таблетница<br>4 ячейки`;
- `price` - цена;
- `url` - sid карточки товара на сайте, подставляется в url карточки;
- `img` - номер изображения и его разрешение в папке `campain` на файл-сервере.

Примеры:

```
// для нескольких строк
cards: [
        { row : [
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          ]
        },
        { row : [
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          ]
        },
        { row : [
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          {name: 'Таблетница<br>4 ячейки', price: '90', url: '6755653/?', img: '/1.jpg'},
          ]
        },
      ],
```

или

```
// для одной строки
cards: [
        { row : [
          {name: 'Набор<br>лент, 5 шт.', price: '202', url: '2611788/?', img: '/13.jpg'},
          {name: 'Набор<br>лент, 5 шт.', price: '386', url: '2611783/?', img: '/14.jpg'},
          {name: 'Набор<br>лент, 5 шт.', price: '282', url: '6881543/?', img: '/15.jpg'},
          {name: 'Набор<br>лент, 3 шт.', price: '368', url: '2611808/?', img: '/16.jpg'},
          ]
        },
      ]
```
