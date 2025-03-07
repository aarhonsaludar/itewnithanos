class Person {
    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;
    }
    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getEmail() {
        return this.#email;
    }
    setName(name) {
        this.#name = name;
    }
    setAge(age) {
        this.#age = age;
    }
    setEmail(email) {
        this.#email = email;
    }
    getAgeCategory(age = this.getAge()) {
        if (age > 0 && age <= 18) {
            return "MINOR";
        } else if (age > 18 && age <= 60) {
            return "ADULT";
        } else if (age > 60) {
            return "SENIOR";
        } else {
            return "INVALID AGE";
        }
    }
}
