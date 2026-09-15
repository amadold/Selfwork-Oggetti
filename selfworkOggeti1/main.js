let people = {
    persona: [],

    addPerson: function () {
        let name = prompt("Inserisci il tuo nome:");
        let surname = prompt("Inserisci il tuo cognome:");
        let age = prompt("Inserisci la tua età:");

        if (name && surname && age) {
            this.persona.push({ name: name, surname: surname, age: age });
        } else {
            console.log("Non hai inserito i tuoi dati");

        }
    },

    presentation: function () {
        this.persona.forEach((person) => console.log(`Ciao, sono ${person.name} ${person.surname} ed ho ${person.age} anni`)
        );
    }
}

people.addPerson();
people.presentation(); 