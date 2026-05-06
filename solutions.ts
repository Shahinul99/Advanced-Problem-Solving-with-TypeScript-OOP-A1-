// Problem :1

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}



// problem :2

function reverseString(text: string): string {
    return text.split("").reverse().join("");
}



//problem :3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
    return "String";
    } else {
    return "Number";
    }
}


// problem :4 
function getProperty(obj: any, key: string) {
    return obj[key];
}

const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};



// problem :5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
    ...book,
    isRead: true,
    };
}

const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};




// problem :6




// problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter((num) => arr2.includes(num));
}


