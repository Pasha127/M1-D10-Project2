let header = function (str){
    console.log(`<~~~~~~~~~~~~~~~~~~~~Exercise ${str}~~~~~~~~~~~~~~~~~~~~>`);
}
header("A")
let test = 'test';
console.log(test);

header("B")
let sum = 10+20;
console.log(sum);

header("C");
let random = Math.floor(Math.random()*10)+ Math.floor(Math.random()*10);
console.log(random);

header("D");
let me = {name:`Paul`, surname:`Levitsky`, age:30};
console.log(me);

header("E");
delete me.age;
console.log(me);

header("F");
me.skills = [`C#`,`C`,`JS`,`CSS`,`HTML`]
console.log(me);

header("G");
me.skills.pop();
console.log(me);

header("01");
let dice = function () {
    roll = 0;
    do{ roll = Math.floor(Math.random()*10);
    }while(roll<1 || roll>6);
    return roll;
}
console.log(dice());

header("02");
let whoIsBigger = function (x,y) {
    if(x>y){
        return x
    }else{
        return y;
    }
}
console.log(whoIsBigger(1,2));

header("03");
let splitMe = function(str) {
    let strArr = str.split(" ");
    return strArr
}
console.log(splitMe("I love motorcycles!"));

header("04");
let deleteOne = function (str, bool) {
    if(bool){
        let newStr = str.slice(1,str.length);
        return newStr
        //console.log(`case01`);
        
    }else{
        let newStr = str.slice(0,str.length-1);
        return newStr
        //console.log(`case02`);
    }
}
console.log(deleteOne("I love motorcycles!", true));
console.log(deleteOne("I love motorcycles!", false));

header("05");
let testStr05 = `This324 is 234a strin6g!`;
let onlyLetters = function (str) {
    let newStr = str.replace(/[0-9]/g, "");
    return newStr;
}
console.log(testStr05);
console.log(onlyLetters(testStr05));

header("06");
let isThisAnEmail = function (str) {
    let newArr = str.split("");    
    let hasAt = false;
    let hasDomain = false;
    let domainArr = []; 
    let domainStr = "";
    for(i=0;i<newArr.length;i++){
        if(newArr[i] === "@"){
            hasAt = true;            
            break;
        }else{
            hasAt = false;            
        }
    }
    for(j=newArr.length;j>=0;j--){
        domainArr.unshift(newArr[j]);
        if(newArr[j] === "."){
            if((newArr.length - j)>=2){
                hasDomain = true;
                break;
            }else{break;}
        };
    }
    if(hasDomain && hasAt){
        return true;

    }else{
        return false;
    }
}
let testEMail01 = "testgmaildev"
let testEMail02 = "test@pasha.dev"
let testEMail03 = "test@gmailcom"
let testEMail04 = "testgmail.com"
let testEMail05 = "test@geocities.net"
console.log(`Is this an email?: ${testEMail01}`, isThisAnEmail(testEMail01))
console.log(`Is this an email?: ${testEMail02}`, isThisAnEmail(testEMail02))
console.log(`Is this an email?: ${testEMail03}`, isThisAnEmail(testEMail03))
console.log(`Is this an email?: ${testEMail04}`, isThisAnEmail(testEMail04))
console.log(`Is this an email?: ${testEMail05}`, isThisAnEmail(testEMail05))

header("07");
let whatDayIsIt = function(){
    let today = new Date();
    switch (today.getDay()){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Satday";
            break;
    }
}
console.log(`Today is:`,whatDayIsIt());

header('08');
let rollTheDices = function (n){
    let rollArr = [];
    let sum = 0;
    for(i=0;i<n;i++){
        let roll = dice()
        sum += roll;
        rollArr[i] = roll;
    }
    let rollReport = {"sum":sum,"values":rollArr};
    return rollReport;
}
console.log(rollTheDices(3));

header("09");
let inputDate = new Date('1/1/2022');

let howManyDays = function (d1) {
    let today = new Date();
    let diff = today.getTime() - d1.getTime();
    let totalDays = Math.ceil(diff / (1000 * 3600 * 24));
    return totalDays;
}

console.log(`How many days have passed since ${inputDate}?`, howManyDays(inputDate),`days`);

header("10");
let isTodayMyBirthday = function (month,day){      
    let today = new Date();
    if(today.getDate() == day && today.getMonth() == (month-1)){            
        return true;
    }else{   
        return false;
    }    
}
console.log(`Is today my birthday?`, isTodayMyBirthday(6,17));