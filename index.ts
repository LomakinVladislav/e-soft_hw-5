interface User {
    id: number;
    name: string;
    age?: number;
    email?: string;
}

enum UserRole {
    admin = "ADMIN",
    user = "USER",
    guest = "GUEST",
}


// Добавил поле Status, переопределив interface User 
interface User {
    premium: Premuim,
}


const userBob: User = {
    id: 1,
    name: "Bob",
    premium: 0
};


const userJohn: User = {
    id: 2,
    name: "John",
    age: 27,
    premium: "false",
};


const userBill: User = {
    id: 3,
    name: "Bill",
    email: "BigBill1988@gmail.com",
    premium: 1,
};

interface Admin extends User {
    role: UserRole,
}

const adminJames: Admin = {
    id: 4,
    name: "James",
    age: 20,
    email: "hackerpentagon2009@mail.ru",
    role: UserRole.admin,
    premium: 1,
}

function greetUser(user: User | Admin | ExtendedUser) {
    if (user.age) {
        if ('role' in user) {
            return `Здравствуй, ${user.name}! Твоя роль: ${user.role}! ;)`
        }
        return `Здравствуй, ${user.name}! Тебе ${user.age} лет ;)`
    }
    if ('role' in user) {
        return `Здравствуй, ${user.name}! Твоя роль: ${user.role}! ;)`
    }
    return `Здравствуй, ${user}! К сожалению, я не знаю, сколько тебе лет :(`
}

console.log(greetUser(adminJames));




const UserStatus = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
  } as const;


type UserStatusType = typeof UserStatus[keyof typeof UserStatus];


interface ExtendedUser extends User {
    status: UserStatusType,
}

const ExtendedUser: ExtendedUser = {
    id: 5,
    name: "Kirk",
    age: 25,
    status: "active",
    premium: "true"
}

console.log(greetUser(ExtendedUser));





class Car {
    make: string;
    model: number;
    year: number;
    mileage: number = 0;

    constructor(make: string, model: number, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive(distance: number): void {
        this.mileage = this.mileage + distance;
    }

    getDescription(): string {
        return (`Описание машины: 
        Марка: ${this.make}  
        Модель ${this.model}  
        Год выпуска: ${this.year}  
        Пробег: ${this.mileage}`  
        )
    }
}

const myCar = new Car("Porshe", 911, 1989)

myCar.drive(250);

console.log(myCar.getDescription())




type Premuim = "true" | "false" | 0 | 1;

function AboutPremium(premium: Premuim) {
    switch (premium) {
        case "true": 
            return `Тип premium = ${premium} означает, что у пользователя есть премиум`

        case "false": 
            return `Тип premium = ${premium} означает, что у пользователя нет премиума`
        
        case 1: 
            return `Тип premium = ${premium} означает, что у пользователя есть премиум`

        case 0: 
            return `Тип premium = ${premium} означает, что у пользователя нет премиума`
    }
}


const userRich: User = {
    id: 6, 
    name: "Jordan",
    premium: 1,
}

const userPoor: User = {
    id: 6, 
    name: "Kerry",
    premium: "false",
}

console.log(AboutPremium(userRich.premium))
console.log(AboutPremium(userPoor.premium))