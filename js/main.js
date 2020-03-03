window.addEventListener("load", event => main());

const main = () => {
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
    let maTable = document.createElement("div");
    let st = new SuperTable(maTable, {
        columns : [{ title : "first", field : "firstName" },
        {title : "last", field : "lastName"}],
        data : employes
    });
    document.body.appendChild(maTable);
}