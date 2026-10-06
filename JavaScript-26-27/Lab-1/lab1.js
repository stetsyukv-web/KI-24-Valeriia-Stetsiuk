/* Практична робота: змінні, оператори, умови та цикли
 У цьому файлі немає виводу в консоль.
 Кожна функція повинна повертати результат через return.
*/

/* Завдання 1.
    Ви розробляєте додаток популярного українського інтернет-магазину.
    На сторінці товару користувач обирає кількість одиниць товару, і додаток 
    повинен показати загальну вартість покупки. Окрім всього іншого, потрібно реалізувати функцію
    яка безпосередньо обчислює загальну вартість: calculateTotalPrice(price, quantity). 
    Функцію буде викликано в іншому місці коду, 
    який відображає загальну вартість покупки на сторінці товару.
*/
function calculateProductTotalPrice(price, quantity) {
     return price * quantity;
}


/* Завдання 2.
    Ви розробляєте додаток секундоміра для смарт годинника. Інший компонент додатку
    ніжчого рівня, який рахує скільки часу минуло після старту, зберігає його в мілісекундах для точності.
    Ваша функція повинна перетворювати мілісекунди у зручний для користувача формат: години та хвилини.
    Після цього результат функції буде відображено в інтерфейсі користувача.

    Функція повинна повертати об'єкт (object), який містить у собі години, хвилини, секунди та мілісекунди. 
    Ми ще не проходили об'єкти, тому початок і кінець функції вже існують. Обрахуйте hours, minutes, seconds та milliseconds
    всередині функції.
    
    Наприклад, якщо totalMs = 3661023 (1 година, 1 хвилина, 1 секунда і 23 мілісекунди), 
    функція повинна повернути:
    {
        hours: 1,
        minutes: 1,
        seconds: 1,
        milliseconds: 23
    }.
*/
function convertMsToTimeSpan(totalMs) {
    let hours, minutes, seconds, milliseconds;

    milliseconds = totalMs % 1000;
    let totalSeconds = Math.floor(totalMs / 1000);
    seconds = totalSeconds % 60;
    let totalMinutes = Math.floor(totalSeconds / 60);
    minutes = totalMinutes % 60;
    hours = Math.floor(totalMinutes / 60);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
}

/* Завдання 3.
    Ви розробляєте мобільний додаток банківської системи. Команда працює над 
    додаванням історії витрат і надходжень. З серверу приходить історія транзакцій
    з додатнім числом, якщо це надходження, або від'ємним числом, якщо це витрата.
    Додатнє число на екрані потрібно буде відображати зі знаком плюс, а від'ємне
    - зі знаком мінус. Конкретно ця функція має повернути строку "+" або "-" в залежності
    від параметра number.
*/
function getNumberSignStr(number) {
    if (number >= 0) {
        return "+";
    } else {
        return "-";
    }
}

/* Завдання 4.
Вам пощастило залишити свій доробок при розробці конкурента
Google Classroom, назву якого ще не придумали. 
В базі даних оцінки зберігаються у виді чисел від 0 до 100.
На екрані результатів тесту потрібно ще відобразити оцінку словом:
- 90–100 -> "excellent"
- 75–89  -> "good"
- 60–74  -> "satisfactory"
- 0–59   -> "unsatisfactory".
- < 0 або > 100 -> "#ERR"

Функція getGradeResult повинна повернути строку відповідно до оцінки score.

*/
function getGradeResult(score) {
    if (score < 0 || score > 100) {
        return "#ERR";
    } else if (score >= 90) {
        return "excellent";
    } else if (score >= 75) {
        return "good";
    } else if (score >= 60) {
        return "satisfactory";
    } else {
        return "unsatisfactory";
    }
}

/* Завдання 5.
    В задачах комбінаторики часто потрібно обчислювати факторіал числа (n!). 
    Факторіал числа n визначається як добуток всіх цілих чисел від 1 до n включно.
    Наприклад, 5! = 5 * 4 * 3 * 2 * 1 = 120.
    Для полегшення навчання ви працюєте над маленьким додатком, який буде обчислювати факторіал числа n.

    Функція calculateFactorial саме обчислює значення факторіалу, а вже потім може бути використана 
    для відображення на сторінці, в консолі, в мобільному додатку, або ще будь-де.

    Зверніть увагу на edge-cases, такі як n = 0, n < 0.
*/
function calculateFactorial(n) {
    if (n < 0) {
        return -1;
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

/* Завдання 6.
Ви знову працюєте над функціоналом інтернет-магазину.
 Окрім обрахунку вартості одного товару, потрібно також рахувати вартість 
 всіх товарів, що знаходяться в кошику. 

 Розробника, який писав цей функціонал, нещодавно звільнили, 
 і функція залишилась недоробленою.

 Параметр сartItems — це масив об'єктів (масиви і об'єкти ще не вивчались в нашому курсі), 
 де кожен об'єкт представляє товар у кошику і 
 має властивості price (ціна) та quantity (кількість).
 
 Потрібно порахувати загальну вартість всіх товарів у кошику використовуючи цикл for.

*/
function calculateCartTotal(cartItems) {
    let total = 0;
    const itemCount = cartItems.length;

    for (let i = 0; i < itemCount; i++) {
        const price = cartItems[i].price;
        const quantity = cartItems[i].quantity;
        total += price * quantity;
    }

    return total;
}

/* Завдання 7.
    Прихильники конспірології і нумерології вирішили перевірити, яке вийде число,
    якщо додати всі числа від 0 до 666. Вони також цікавилися програмуванням і 
    вирішили порівняти три способи реалізації  цієї задачі, використовуючи
    три доступні цикли - for, while, do while. 

    Допоможіть конспірологам і дайте відповідь на ці запитання:
    На Вашу думку, який цикл найзручніше використовувати для цієї задачі? Чому? 

    Найзручніший цикл — for, ми точно знаємо тут, від якого до якого числа ми йдемо.

    Чим відрізняється while і do while? 

    while перевіряє умову перед виконанням тіла.
    do while виконує тіло хоча б один раз, а потім перевіряє умову.
*/
function getBeastNumberSum1() {
    const beastNumber = 666;
    let total = 0;

    for (let i = 1; i <= beastNumber; i++) {
        total += i;
    }

    return total;
}
function getBeastNumberSum2() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (i <= beastNumber) {
        total += i;
        i++;
    }

    return total;
}
function getBeastNumberSum3() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    do {
        total += i;
        i++;
    } while (i <= beastNumber);

    return total;
}

/* 
    Перепишіть функцію getBeastNumberSum2 з попереднього завдання
    так, щоб цикл виглядав:
    while (true) {
        ..
    }
    (тобто умова завершення циклу має бути всередині тіла циклу, використовуйте ключове слово break)
*/
function getBeastNumberSum2_AnotherApproach() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (true) {
        if (i > beastNumber) {
            break;
        }
        total += i;
        i++;
    }

    return total;
}

/* Завдання 8.
    Імплементуючи getDivisibleNumbers, програміст
    припустився помилки і програма зависає всередині функції.

    За допомогою DevTools в браузері і вкладки Sources,
    поставте breakpoint всередині циклу while і знайдіть
    проблему в коді, а потім виправте його. 

    (Навіть якщо ви знайдете проблему без DevTools, все одно
    використайте DevTools пліз і побачте як можна дивитись стан програми
    під час її виконання).
*/
function getDivisibleNumbers(limit, divisor) {
    const result = [];
    let i = 1;

    while (true) {
        if (i > limit) {
            break;
        }

        if (i % divisor === 0) {
            result.push(i);
        }

        i = i + 1;
    }

    return result;
}

/* Завдання 9 (з зірочкою).
Конспірологи не можуть заспокоїтись і далі перевіряють числа...
На цей раз вони хочуть мати змогу бачити всі числа з однаковими цифрами до певного числа limit.
Тобто, якщо limit = 700, то їм треба 11, 22, 33, .., 111, 222, .., 666.
Також ще уявіть, що часу на виконання не багато і начальник вирішив що будемо робити в лоб, не по математичному,
тобто циклом будемо проходити по кожному числу, перетворювати його в строку (string) і перевіряти чи всі символи однакові.

Підходяще число треба класти в масив results за допомогою results.push(currentNumber).

*/
function getSameDigitNumbers(limit) {
    results = [];

    for (let currentNumber = 1; currentNumber <= limit; currentNumber++) {
        let str = String(currentNumber);
        let allSame = true;

        for (let j = 1; j < str.length; j++) {
            if (str[j] !== str[0]) {
                allSame = false;
                break;
            }
        }

       
        if (allSame && str.length > 1) {
            results.push(currentNumber);
        }
    }

    return results;
}