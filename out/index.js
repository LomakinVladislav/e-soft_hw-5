"use strict";
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMIN";
    UserRole["user"] = "USER";
    UserRole["guest"] = "GUEST";
})(UserRole || (UserRole = {}));
var userBob = {
    id: 1,
    name: "Bob",
    premium: 0
};
var userJohn = {
    id: 2,
    name: "John",
    age: 27,
    premium: "false",
};
var userBill = {
    id: 3,
    name: "Bill",
    email: "BigBill1988@gmail.com",
    premium: 1,
};
var adminJames = {
    id: 4,
    name: "James",
    age: 20,
    email: "hackerpentagon2009@mail.ru",
    role: UserRole.admin,
    premium: 1,
};
function greetUser(user) {
    if (user.age) {
        if ('role' in user) {
            return "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ".concat(user.name, "! \u0422\u0432\u043E\u044F \u0440\u043E\u043B\u044C: ").concat(user.role, "! ;)");
        }
        return "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ".concat(user.name, "! \u0422\u0435\u0431\u0435 ").concat(user.age, " \u043B\u0435\u0442 ;)");
    }
    if ('role' in user) {
        return "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ".concat(user.name, "! \u0422\u0432\u043E\u044F \u0440\u043E\u043B\u044C: ").concat(user.role, "! ;)");
    }
    return "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ".concat(user, "! \u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u044F \u043D\u0435 \u0437\u043D\u0430\u044E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u0431\u0435 \u043B\u0435\u0442 :(");
}
console.log(greetUser(adminJames));
var UserStatus = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
};
var ExtendedUser = {
    id: 5,
    name: "Kirk",
    age: 25,
    status: "active",
    premium: "true"
};
console.log(greetUser(ExtendedUser));
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.mileage = 0;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.drive = function (distance) {
        this.mileage = this.mileage + distance;
    };
    Car.prototype.getDescription = function () {
        return ("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u044B: \n        \u041C\u0430\u0440\u043A\u0430: ".concat(this.make, "  \n        \u041C\u043E\u0434\u0435\u043B\u044C ").concat(this.model, "  \n        \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this.year, "  \n        \u041F\u0440\u043E\u0431\u0435\u0433: ").concat(this.mileage));
    };
    return Car;
}());
var myCar = new Car("Porshe", 911, 1989);
myCar.drive(250);
console.log(myCar.getDescription());
function AboutPremium(premium) {
    switch (premium) {
        case "true":
            return "\u0422\u0438\u043F premium = ".concat(premium, " \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u0435\u043C\u0438\u0443\u043C");
        case "false":
            return "\u0422\u0438\u043F premium = ".concat(premium, " \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435\u0442 \u043F\u0440\u0435\u043C\u0438\u0443\u043C\u0430");
        case 1:
            return "\u0422\u0438\u043F premium = ".concat(premium, " \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u0435\u043C\u0438\u0443\u043C");
        case 0:
            return "\u0422\u0438\u043F premium = ".concat(premium, " \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435\u0442 \u043F\u0440\u0435\u043C\u0438\u0443\u043C\u0430");
    }
}
var userRich = {
    id: 6,
    name: "Jordan",
    premium: 1,
};
var userPoor = {
    id: 6,
    name: "Kerry",
    premium: "false",
};
console.log("\u0423 \u0431\u043E\u0433\u0430\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u0435\u043C\u0438\u0443\u043C? ".concat(userRich.premium));
console.log("\u0410 \u0443 \u0431\u0435\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u0435\u043C\u0438\u0443\u043C? ".concat(userPoor.premium));
console.log(AboutPremium(userRich.premium));
console.log(AboutPremium(userPoor.premium));
