"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

// --- CLASS DEFINITIONS (Needed globally for the sections below) ---
const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto"
};

class TAccount {
  #type;
  #balance = 0;
  #withdrawCount = 0;
  #currencyType = "NOK";

  constructor(aType) {
    this.#type = aType;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    printOut(`Account is changed from ${this.#type} to ${aType}`);
    this.#type = aType;
    this.#withdrawCount = 0;
  }

  getBalance() {
    return this.#balance;
  }

  #currencyConvert(aType) {
    return (CurrencyTypes.NOK.value / CurrencyTypes[this.#currencyType].value) * CurrencyTypes[aType].value;
  }

  setCurrencyType(aType) {
    if (this.#currencyType === aType) return;
    const oldName = CurrencyTypes[this.#currencyType].name;
    const newName = CurrencyTypes[aType].name;
    
    const balanceInNOK = this.#balance * CurrencyTypes[this.#currencyType].value;
    this.#balance = balanceInNOK / CurrencyTypes[aType].value;
    this.#currencyType = aType;
    
    printOut(`The account currency has change from ${oldName} to ${newName}`);
    printOut(`New balance is ${this.#balance.toFixed(2)}${CurrencyTypes[aType].denomination}`);
  }

  deposit(aAmount, aType = "NOK") {
    const amountInNOK = aAmount * CurrencyTypes[aType].value;
    this.#balance += amountInNOK / CurrencyTypes[this.#currencyType].value;
    this.#withdrawCount = 0;
    
    let amountString = `${aAmount.toFixed(2)}${CurrencyTypes[aType].denomination}`;
    if (aType !== "NOK") {
      amountString = `${aAmount.toFixed(2)} ${CurrencyTypes[aType].name}`;
    }
    
    const balString = `${this.#balance.toFixed(2)}${CurrencyTypes[this.#currencyType].denomination}`;
    printOut(`Deposit of ${amountString}, new balance is ${balString}`);
  }

  withdraw(aAmount, aType = "NOK") {
    switch (this.#type) {
      case AccountType.Pension:
        printOut("You can't withdraw from a Pensionskonto!");
        return;
      case AccountType.Saving:
        if (this.#withdrawCount >= 3) {
          printOut("You can't Withdraw from a Sparekonto more than three times!");
          return;
        }
        break;
    }

    const amountInNOK = aAmount * CurrencyTypes[aType].value;
    this.#balance -= amountInNOK / CurrencyTypes[this.#currencyType].value;
    this.#withdrawCount++;

    let amountString = `${aAmount.toFixed(2)}${CurrencyTypes[aType].denomination}`;
    if (aType !== "NOK") {
      amountString = `${aAmount.toFixed(2)} ${CurrencyTypes[aType].name}`;
    }

    const balString = `${this.#balance.toFixed(2)}${CurrencyTypes[this.#currencyType].denomination}`;
    printOut(`Withdrawal of ${amountString}, new balance is ${balString}`);
  }
}

// --- EXECUTION SECTIONS ---

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`${AccountType.Normal}, ${AccountType.Saving}, ${AccountType.Credit}, ${AccountType.Pension}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccount = new TAccount(AccountType.Normal);
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(AccountType.Saving);
printOut(`myAccount = ${myAccount.toString()}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// (Note: Part 3 logic is executed here to ensure the balance is correct for Part 4)
myAccount.deposit(100); 
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance()}`);

myAccount.setType(AccountType.Saving);
myAccount.deposit(25); // Balance is 75, deposit 25 to reach 100
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30); // Blocked (limit reached)
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10); // Blocked (pension)
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10); // Withdrawal to 0
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType("SEK");
myAccount.setCurrencyType("USD");
myAccount.setCurrencyType("NOK");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(12, "USD");
myAccount.withdraw(10, "GBP");
myAccount.setCurrencyType("CAD");
myAccount.setCurrencyType("INR");

const balanceInINR = myAccount.getBalance();
const amountInSEK = (balanceInINR * CurrencyTypes.INR.value) / CurrencyTypes.SEK.value;
myAccount.withdraw(Number(amountInSEK.toFixed(2)), "SEK");
printOut(newLine);