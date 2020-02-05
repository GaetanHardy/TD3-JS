window.addEventListener("load", event => test_employes());
class User {
    constructor(firstName, lastName, eMail, numTel, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.numTel = numTel;
        this.age = age;  
    }
}
 
class Employe extends User {
    constructor(firstName, lastName, eMail, numTel, age, jobTitle, salaire) {
        super(firstName, lastName, eMail, numTel, age);
        this.jobTitle = jobTitle;
        this.salaire = salaire;
    }
    static medSalary(employes) {
        return mediane(employes.map(employe => employe.salaire));
    }
    static ageMoyen(employes) {
        return avg(employes.map(employe => employe.age));
    }
}

const randRange = (min, max) => Math.floor(Math.random() * (max-min + 1)) + min;
const test_employes = () => {
    faker.locale = "fr";
    let employes = [];
    for (let i = 1; i < 10000; i++){
        let employe = new Employe(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.email(),
            faker.phone.phoneNumber(),
            randRange(18,62),
            faker.name.jobTitle(),
            randRange(2000, 4500)
        );
        employes.push(employe);
    }
    console.log(Employe.ageMoyen(employes));
    console.log(Employe.medSalary(employes))
}
const avg = employes => employes.reduce((acc, cur) => acc + cur / employes.length, 0);

const mediane = employes => employes.reduce((acc, cur) => Math.max(cur) + Math.min(cur) / 2, 0);

/* [1, 2, 3].reduce((acc, cur) => acc + cur, 0); */