'use strict'

class Person {
    constructor(name, address, birth_date) {
        this.name = name;
        this.address = address;
        this.birth_date = birth_date;
        this.array = [];
    }

    getName() {
        return this.name;
    }

    getAge() {
        let today = new Date(),
            birthDate = new Date(this.birth_date),
            age = today.getFullYear() - birthDate.getFullYear();

        let month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

module.exports = Person;
