//task 1
const registrationName = () =>{
    let correctName = false;
    do{
    const name = prompt("Введите ваше имя");
    if(name.length == 0 ){
        continue;
    }else {
        correctName = true;
        return name;
    }
    }while(!correctName);
};
// registrationName();


const registrationLastname = () =>{
    let correctLastname = false;
    do{
    const lastName = prompt("Введите вашу фамилию");
    if(lastName.length == 0 ){
        continue;
    }else {
        correctLastname = true;
        return lastName;
    }
    }while(!correctLastname);
};
// registrationLastname();


const registrationPassword = () =>{
    let correctPassword = false;
    do{
    const password = prompt("Введите ваш пароль");
    if(password.length < 6){
        continue;
    }else{
        if (password.toLowerCase() == password){
            correctPassword = false;
            continue;
        }else if (password.toUpperCase() == password){
            correctPassword = false;
            continue;
        }else {
            correctPassword = true;
        }
        alert("Varieble password");
    }

    }while(!correctPassword);
};
// registrationPassword();

const correctNL = (name, lastname)=>{
    const lowerName = name.toLowerCase();
    const lowerLastname = lastname.toLowerCase();
    alert(`${lowerName[0].toUpperCase()}${lowerName.slice(1)} ${lowerLastname[0].toUpperCase()}${lowerLastname.slice(1)}`);
};
// correctNL(registrationName(),registrationLastname());

// Task 2 

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};
console.log(getRandomArbitrary(30, 40));