/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    } else {
        return numbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let triNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        triNumbers.push(numbers[i] * 3);
    }
    return triNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let integers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(parseInt(numbers[i]))) {
            integers.push(parseInt(numbers[i]));
        } else {
            integers.push(0);
        }
    }
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let change: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        if (!isNaN(parseInt(amounts[i].replace("$", "")))) {
            change.push(parseInt(amounts[i].replace("$", "")));
        } else {
            change.push(0);
        }
    }
    return change;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages: string[] = [];
    for (let i = 0; i < messages.length; i++) {
        if (!messages[i].endsWith("!") && !messages[i].endsWith("?")) {
            newMessages.push(messages[i]);
        } else if (messages[i].endsWith("!")) {
            newMessages.push(messages[i].toUpperCase());
        }
    }
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            count++;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isRGB: boolean = true;
    for (let i = 0; i < colors.length; i++) {
        if (
            colors[i].toLowerCase() != "red" &&
            colors[i].toLowerCase() != "blue" &&
            colors[i].toLowerCase() != "green"
        ) {
            isRGB = false;
        }
    }
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let total: number = 0;
    let equation: string = "";
    if (addends.length != 0) {
        for (let i = 0; i < addends.length; i++) {
            total += addends[i];
            equation +=
                addends[i].toString(10) + (i < addends.length - 1 ? "+" : "");
        }
    } else {
        equation = "0";
    }
    return total.toString(10) + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let total: number = 0;
    let inValues: number[] = [];
    let firstNeg: boolean = true;
    for (let i = 0; i < values.length; i++) {
        inValues.push(values[i]);
        if (firstNeg && values[i] < 0) {
            inValues.push(total);
            firstNeg = false;
        }
        total += values[i];
    }
    if (firstNeg) {
        inValues.push(total);
    }
    return inValues;
}
