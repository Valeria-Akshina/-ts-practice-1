// Задание 2.1
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

// Задание 2.2
let city = "Москва";
let population = 12_000_000;
let isCapital = true;

// Задание 2.3
let title: string = "Книга";
title = "Число";

let pages: number = 300;
pages = 300;

let isRead: boolean = false;
isRead = true;

// Задание 2.4
let userName1: string | null = null;
let userName2: string = "";

////////////////////////////////////////////////////////////////

// Задание 3.1
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

// Задание 3.2
console.log(formatPrice(1234.5));
console.log(clamp(15, 0, 10));
logMessage("Привет от TypeScript!");
console.log(repeat("abc"));
console.log(describeUser("Иван"));
console.log(describeUser("Иван", 25));

// Задание 3.2
// formatPrice("100");
// clamp(5, 0);
// logMessage(123);

// Задание 3.3
function logVoid(msg: string): void {
    console.log(msg);
}

function returnUndefined(): undefined {
    return undefined;
}