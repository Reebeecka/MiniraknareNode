const readline = require('readline');

// Definition (calculator)
const calculator = {
    // lagra värden i registret
    registers: {}, 

    // Funktion för användarinput
    processInput: function (inputStr) {
        // Dela upp användarinput i ord och små bokstäver
        const tokens = inputStr.trim().toLowerCase().split(' ');

        let operation, register;

        // Om första ordet är 'print', använd andra och tredje token som operation och register
        // Annars använd första och andra token
        if (tokens.length > 1) {
            if (tokens[0] === 'print') {
                operation = 'print';
                register = tokens[1];
            } else {
                operation = tokens[1];
                register = tokens[0];
            }
        } else {
            operation = tokens[0];
            register = undefined;
        }

        //Hantera felaktiga kommandon
            //Om division läggs till behöver ordet läggas till här
        if (!['add', 'subtract', 'multiply', 'print', 'quit'].includes(operation)) {
            console.log(`Ogiltigt kommando: ${inputStr}`);
            return;
        }

        // Hantera 'quit' 
        if (operation === 'quit') {
            console.log("Avslutar miniräknaren. Hejdå!!");
            process.exit();
        }

        // Vid skapande av nytt "ord" så startar värdet på 0
        if (!this.registers[register]) {
            this.registers[register] = 0;
        }

        // Utför operationen baserat på användarens input

        if (operation === 'print') {
            // Om operationen är 'print', skriv ut värdet
            if (this.registers[register] !== undefined) {
                console.log(`${register}: ${this.registers[register]}`);
            } else {
                console.log(`${register} är inte definierat.`);
            }

        } else if (operation === 'add') {
            // Om operationen är 'add', addera värdet från registret
            // Slice och skicka till getValue
            const value = this.getValue(tokens.slice(2));
            //Dubbelkollar så det är ett nummer
            if (!isNaN(value)) {
                this.registers[register] += value;
            }
        } else if (operation === 'subtract') {
            // Om operationen är 'subtract', subtrahera värdet från registret
            const value = this.getValue(tokens.slice(2));
            if (!isNaN(value)) {
                this.registers[register] -= value;
            }
        } else if (operation === 'multiply') {
            // Om operationen är 'multiply', multiplicera registret med värdet
            const value = this.getValue(tokens.slice(2));
            if (!isNaN(value)) {
                this.registers[register] *= value;
            }
        }
        //För att lägga till division så kopiera en av ovanstående och ändra "*= till /="
    },

    // Hjälpfunktion för att hämta värdet med stöd för "lazy evaluation"
    getValue: function (tokens) {
        let value = '';

        // Loopa igenom varje ord, konvertera till små bokstäver och sätt ihop dem
        for (const token of tokens) {
            value += token.toLowerCase();
        }

        // Om värdet finns i registret, returnera det
        if (this.registers[value]) {
            return this.registers[value];
        }

        // Om inte i registret, försök omvandla till heltal; returnera 0 om det inte är ett giltigt nummer
        const parsedValue = parseInt(value, 10);
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
};

// Konfigurera läsgränssnittet
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Händelselyssnare för användarinput
rl.on('line', (input) => {
    try {
        calculator.processInput(input);
    } catch (error) {
        console.error(`Fel: ${error.message}`);
    }
});

// Visa initiala meddelanden till användaren
console.log("Startar miniräknare");
console.log("Skriv 'quit' för att avsluta.");

// Avsluta programmet vid Ctrl+C
rl.on('close', () => {
    console.log("Avslutar miniräknare. Hejdå!");
    process.exit();
});
