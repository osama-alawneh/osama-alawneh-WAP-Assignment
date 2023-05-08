const accountName = document.querySelector("#accountName");
const depositAmount = document.querySelector("#deposit");
const submitBtn = document.querySelector("#submitBtn");
const accountListInfo = [];

class Person{
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName(){
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(fName, lName, hireDate){
        super(fName, lName)
        this.hireDate = hireDate;
    }

    getEmployeeInfo(){
        return `Employee FullName: ${this.getFullName()}, Hire Date: ${this.hireDate}`
    }
}

const displayGreeting = ({firstName, lastName})=>{
    console.log(`Hello ${firstName} ${lastName}`);
}

submitBtn.addEventListener("click", submitBtnHandler);

function submitBtnHandler(){
    // const employee = new Employee("Osama", "Alawneh", new Date("2022-03-18"))
    // console.log(employee.getEmployeeInfo());
    const person = new Person("Osama", "Alawneh")
    displayGreeting(person)

    const maxValue = findMax(1,2,3,4,5,6,7,8,9,10)
    console.log(maxValue);
    addAccountToAccountList()
}

function addAccountToAccountList(){
    const accountValue = accountName.value;
    const depositValue = parseFloat(depositAmount.value);
    if(!accountValue){
        return;
    }
    if(!depositValue){
        return;
    }

    const account = {};
    account.AccountName = accountValue;
    account.Balance = depositValue;
    accountListInfo.push(account);
}


function findMax(){
    let maxValue = -Infinity;

    for(let i = 0 ; i < arguments.length ; i++){
        if(arguments[i] > maxValue){
            maxValue = arguments[i];
        }
    }

    return maxValue;
}