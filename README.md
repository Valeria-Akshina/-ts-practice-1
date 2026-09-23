# -ts-practice-1

Практическая работа №1.1
Требуемые условия завершения
Введение в TypeScript - типы и настройка проекта
Цель работы
Освоить инициализацию TypeScript-проекта и настройку файла tsconfig.json.
Научиться объявлять типизированные переменные и функции.
Понять, как читать сообщения компилятора tsc и исправлять ошибки типизации.
Научиться компилировать .ts в .js и запускать результат в Node.js.
Закрепить навыки работы с базовыми типами, необязательными и дефолтными параметрами функций.
Оборудование и среда
Node.js (версия 16 или выше) и npm.
Редактор кода Visual Studio Code (или аналогичный).
Терминал (командная строка).
Браузер (для просмотра документации).
Установленный пакет TypeScript (npm install --save-dev typescript).
 
Ключевые понятия
Термин	Определение
Статическая типизация	Свойство языка программирования, при котором тип переменной известен на этапе компиляции и проверяется до выполнения программы.
Вывод типов (type inference)	Автоматическое определение типа переменной компилятором на основе её начального значения.
tsconfig.json	Файл конфигурации TypeScript-проекта, задающий параметры компиляции.
Компилятор tsc	Инструмент командной строки, преобразующий код TypeScript в JavaScript.
Строгий режим (strict)	Набор опций компилятора, включающий максимально строгие проверки типов, включая strictNullChecks.
 
Ход работы
Часть 1. Подготовка проекта (15 мин)
В этой части вы создадите структуру проекта, установите TypeScript и настроите конфигурационный файл.

Задание 1.1. Создайте папку проекта ts-practice-1, перейдите в неё и инициализируйте проект:

mkdir ts-practice-1
cd ts-practice-1
npm init -y
npm install --save-dev typescript
npx tsc --init
Задание 1.2. Создайте структуру каталогов:

ts-practice-1/
    src/
        index.ts
    tsconfig.json
    package.json
Задание 1.3. Настройте tsconfig.json так, чтобы:

компиляция шла в ES2020;
использовалась модульная система commonjs;
был включён строгий режим;
исходники брались из src, результат складывался в dist;
каталоги node_modules и dist исключались.
Пример итогового файла с комментариями:

{
  "compilerOptions": {
    "target": "ES2020",         // версия JavaScript, в которую компилируется код
    "module": "commonjs",      // модульная система (для Node.js)
    "strict": true,           // включает все строгие проверки типов
    "rootDir": "./src",       // корневая папка исходников
    "outDir": "./dist",       // папка для скомпилированных файлов
    "esModuleInterop": true,  // совместимость с CommonJS-модулями
    "forceConsistentCasingInFileNames": true, // строгий регистр в путях
    "skipLibCheck": true    // пропуск проверки типов библиотек
  },
  "include": ["src/**/*"],   // какие файлы компилировать
  "exclude": ["node_modules", "dist"] // что игнорировать
}
Объяснение опций:

target — определяет, в какую версию JavaScript будет компилироваться код.
module — задаёт систему модулей (для Node.js обычно commonjs).
strict — включает все строгие проверки, включая strictNullChecks и noImplicitAny.
rootDir — указывает, где лежат исходные .ts-файлы.
outDir — папка, куда складываются .js-файлы после компиляции.
include — массив шаблонов файлов, которые нужно компилировать.
exclude — папки, которые компилятор игнорирует.
 
Часть 2. Работа с базовыми типами 
Задание 2.1. В файле src/index.ts объявите переменные всех пяти базовых типов: string, number, boolean, null, undefined. Для каждой — явная аннотация типа и осмысленное значение.

let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;
Задание 2.2. Объявите три переменные без аннотации, но с начальным значением. В комментарии укажите, какой тип вывел компилятор (проверьте наведением курсора в VS Code).

let city = "Москва";       // string
let population = 12_000_000; // number
let isCapital = true;     // boolean
Задание 2.3. Намеренно создайте по одной ошибке типизации для string, number и boolean. Запустите npx tsc и выпишите полный текст сообщений компилятора. Затем исправьте ошибки.

// Ошибка 1: присвоение числа строковой переменной
let title: string = "Книга";
title = 123; // Type 'number' is not assignable to type 'string'.

// Ошибка 2: присвоение строки числовой переменной
let pages: number = 300;
pages = "много"; // Type 'string' is not assignable to type 'number'.

// Ошибка 3: присвоение числа булевой переменной
let isRead: boolean = false;
isRead = 1; // Type 'number' is not assignable to type 'boolean'.
Задание 2.4. Объясните, почему при "strict": true следующий код вызывает ошибку и как её исправить корректно?

let userName: string = null;
Ответ: При strict: true включается опция strictNullChecks, которая запрещает присваивать null и undefined переменным других типов. Правильные варианты:

Использовать объединение типов: let userName: string | null = null;
Инициализировать пустой строкой: let userName: string = "";
Использовать необязательный параметр или undefined: let userName: string | undefined = undefined;
 
Часть 3. Типизированные функции 
Задание 3.1. Напишите функции с явной аннотацией параметров и возвращаемого значения:

function formatPrice(value: number): string {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

function logMessage(message: string): void {
    console.log(message);
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times);
}

function describeUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`;
    }
    return name;
}
Задание 3.2. Вызовите каждую функцию корректно. Затем сделайте по одному некорректному вызову. Зафиксируйте текст ошибок компилятора.

// Корректные вызовы
console.log(formatPrice(1234.5)); // "1 234,50 ₽"
console.log(clamp(15, 0, 10)); // 10
logMessage("Привет"); // "Привет"
console.log(repeat("abc")); // "abcabc"
console.log(describeUser("Иван")); // "Иван"
console.log(describeUser("Иван", 25)); // "Иван, возраст: 25"

// Некорректные вызовы
formatPrice("100"); // Argument of type 'string' is not assignable to parameter of type 'number'.
clamp(5, 0); // Expected 3 arguments, but got 2.
logMessage(123); // Argument of type 'number' is not assignable to parameter of type 'string'.
Задание 3.3. Чем отличается тип возвращаемого значения void от undefined?

void — означает, что функция ничего не возвращает (или возвращает undefined неявно). Используется для функций с побочными эффектами (например, console.log).
undefined — конкретное значение, которое может быть возвращено явно. Функция с типом возврата undefined обязана вернуть undefined.
function logMessage(msg: string): void {
    console.log(msg);
}

function returnUndefined(): undefined {
    return undefined;
}
 
Часть 4. Мини-проект «Библиотека» 
Задание 4.1. Создайте файл src/library.ts с типизированными функциями для работы с книгами.

type Book = {
    title: string;
    author: string;
    year: number;
    isRead: boolean;
};

export function createBook(title: string, author: string, year: number): Book {
    return { title, author, year, isRead: false };
}

export function markAsRead(book: Book): Book {
    return { ...book, isRead: true };
}

export function getBookInfo(book: Book): string {
    const status = book.isRead ? "прочитана" : "не прочитана";
    return `«${book.title}», ${book.author}, ${book.year} — ${status}`;
}

export function countReadBooks(books: Book[]): number {
    return books.filter(book => book.isRead).length;
}
Задание 4.2. В файле src/index.ts импортируйте функции, создайте массив из 3–4 книг, отметьте часть как прочитанные и выведите в консоль информацию.

import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library";

const books = [
    createBook("1984", "Джордж Оруэлл", 1949),
    createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
    createBook("Преступление и наказание", "Фёдор Достоевский", 1866),
];

books[0] = markAsRead(books[0]);
books[2] = markAsRead(books[2]);

books.forEach(book => console.log(getBookInfo(book)));
console.log(`Прочитано книг: ${countReadBooks(books)}`);
Задание 4.3. Скомпилируйте проект и запустите:

npx tsc
node dist/index.js
Ожидаемый вывод консоли:

«1984», Джордж Оруэлл, 1949 — прочитана
«Мастер и Маргарита», Михаил Булгаков, 1967 — не прочитана
«Преступление и наказание», Фёдор Достоевский, 1866 — прочитана
Прочитано книг: 2
 
Часть 5. Анализ ошибок компилятора 
Для каждого фрагмента определите тип ошибки, объясните причину и предложите исправление.

Код	Ошибка	Причина и исправление
A	Type 'string' is not assignable to type 'number'.	Переменная count выведена как number. Присвоение строки недопустимо. Исправление: count = 10; или изменить тип на number | string.
B	Expected 2 arguments, but got 1.	Функция add требует два аргумента. Исправление: add(2, 3); или сделать второй параметр необязательным: function add(x: number, y: number = 0): number.
C	Type 'null' is not assignable to type 'string'.	При strictNullChecks null не входит в тип string. Исправление: let name: string | null = null; или let name: string = "";.
D	A function whose declared type is neither 'void' nor 'any' must return a value.	Функция объявлена с возвращаемым типом string, но ничего не возвращает. Исправление: добавить return "Привет, " + name; или изменить тип на void.
 
Часть 6. Вопросы для самопроверки
Что такое статическая типизация и какие преимущества она даёт?
Что такое вывод типов? Когда лучше указывать аннотацию явно?
За что отвечает "strict": true в tsconfig.json?
Как скомпилировать проект и запустить результат?
Почему null нельзя присвоить переменной типа string при strictNullChecks? Как правильно это сделать?
Чем void отличается от undefined в контексте возвращаемого типа функции?
 
Пример / практический кейс
Полный разбор мини-проекта «Библиотека»

Постановка: создать модуль для работы с книгами, который позволяет создавать книги, отмечать их как прочитанные, получать информацию и считать количество прочитанных.

Решение: в файле library.ts описан тип Book, реализованы четыре функции. В index.ts создан массив книг, две отмечены как прочитанные, выведена информация.

Результат: после компиляции npx tsc и запуска node dist/index.js в консоль выводится список книг и количество прочитанных.

 
Сравнительная таблица типов
Тип	Пример	Особенности
string	"Привет"	Текстовая строка, неизменяемая.
number	42, 3.14	Целые и дробные числа, включая NaN и Infinity.
boolean	true, false	Логический тип.
null	null	Явное отсутствие значения. Требует strictNullChecks для безопасной работы.
undefined	undefined	Значение по умолчанию для неинициализированных переменных.
Типичные ошибки
Присвоение значения неверного типа. Например, let x: number = "5";. Исправление: привести тип или изменить аннотацию.
Забыли указать возвращаемый тип. TypeScript выведет его сам, но для публичных функций лучше указывать явно.
Использование null без strictNullChecks. При строгом режиме это вызовет ошибку. Используйте объединение типов string | null.
Неправильный порядок аргументов. Компилятор проверяет типы, но не смысл. Будьте внимательны.
Игнорирование сообщений компилятора. Всегда читайте текст ошибки — там указана причина и место.
 
Вопросы для самопроверки
Что такое статическая типизация и какие преимущества она даёт?
Что такое вывод типов? Когда лучше указывать аннотацию явно?
За что отвечает "strict": true в tsconfig.json?
Как скомпилировать проект и запустить результат?
Почему null нельзя присвоить переменной типа string при strictNullChecks? Как правильно это сделать?
Чем void отличается от undefined в контексте возвращаемого типа функции?
Какую роль играют опции rootDir и outDir в tsconfig.json?
Итоги
Вы научились инициализировать TypeScript-проект и настраивать tsconfig.json.
Освоили объявление переменных базовых типов и работу с выводом типов.
Написали типизированные функции с обязательными, необязательными и дефолтными параметрами.
Реализовали мини-проект «Библиотека» с типами и экспортом/импортом модулей.
Разобрали типичные ошибки компилятора и способы их исправления.
Критерии оценивания
Критерий	Баллы
Проект инициализирован, tsconfig.json настроен корректно	2
Все базовые типы использованы осознанно, ошибки типизации продемонстрированы и исправлены	3
Функции написаны с полной типизацией, включая необязательные и дефолтные параметры	3
Мини-проект «Библиотека» работает, вывод соответствует ожидаемому	4
Анализ ошибок компилятора выполнен верно	3
Ответы на вопросы самопроверки полные и точные	3
Репозиторий на github	2
Итого	20
Оценка: 18–20 — «отлично», 15–17 — «хорошо», 11–14 — «удовлетворительно», менее 11 — «неудовлетворительно».

Литература / источники
Официальная документация TypeScript. URL: https://www.typescriptlang.org/docs/
TypeScript Handbook. URL: https://www.typescriptlang.org/docs/handbook/intro.html
Руководство по tsconfig.json. URL: https://www.typescriptlang.org/tsconfig
Документация Node.js. URL: https://nodejs.org/docs/latest/api/
MDN Web Docs: JavaScript. URL: https://developer.mozilla.org/ru/docs/Web/JavaScript