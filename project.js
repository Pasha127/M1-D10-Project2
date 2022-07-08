//boilerplate
let header = function (str){
    console.log(`<~~~~~~~~~~~~~~~~~~~~Exercise ${str}~~~~~~~~~~~~~~~~~~~~>`);
}
const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];



//code starts here
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

header("11");
let deleteProp = function (obj,str) {
    delete obj[str];
    return obj;
}
let testObj ={"property01":"test1","property02":"test2"}
console.log(`before deleteProp:`,testObj);
console.log(`after deleteProp:`,deleteProp(testObj,"property02"));

header("12");
let oldestMovie = function (a){
    let earliestYear = Infinity;   
    let oldMovieLocation = 0;
    for(i=0;i<a.length;i++){        
        let thatYear = parseInt(a[i].Year);
        if(thatYear < earliestYear){
            earliestYear = thatYear;
            oldMovieLocation = i;            
        }
    }
    return a[oldMovieLocation];
}
console.log(`Oldest movie:`);
console.log(oldestMovie(movies));


header("13");
let countMovies = function (a){
    let movieCount = a.length;
    return movieCount;
}
console.log(`Number of movies:`,countMovies(movies))


header("14");
let onlyTheTitles = function (a) {
    let newTitleArr = [];
    for(i=0;i<a.length;i++){
        newTitleArr.push(a[i].Title);
    }
    return newTitleArr;
}
console.log(`Just the titles:`, onlyTheTitles(movies));

header("15");
let onlyInThisMillennium = function (a) {
    let newMovieArr = [];
    for(i=0;i<a.length;i++){        
        let thatYear = parseInt(a[i].Year);
        if(thatYear > 1999){
            newMovieArr.push(a[i]);
            //console.log(a[i]);            
        }
    }
    return newMovieArr;
}
console.log(`Movies from this millenium:`, onlyInThisMillennium(movies));

header("16");
let getMovieById = function (idStr,a) {
    let output = null;
    for(i=0;i<a.length;i++){
        if(a[i].imdbID === idStr){
            output = a[i];
            break;            
        }
    }
    return output;
}
let movieId01 = "tt0167260";
let movieId02 = "tt0100054";

console.log(`Desired movie ID: ${movieId01}:`, getMovieById(movieId01,movies));
console.log(`Desired movie ID: ${movieId02}:`, getMovieById(movieId02,movies));

header("17");
let sumAllTheYears = function (a) {
    let yearSum = 0;
    for(i=0;i<a.length;i++){
        yearSum += parseInt(a[i].Year);
        //console.log(yearSum);
    }
    return yearSum;
}
console.log(`Sum of years:`, sumAllTheYears(movies));

header("18");
let searchByTitle = function (str,a) {
    let outputArray = ["placeholder"];
    str = str.toLowerCase();
    let query = str.split(" ");
    //console.log("debug - query", query);
    let cantAdd = false;
    
    for(i=0;i<query.length;i++){
        for(j=0;j<a.length;j++){
            let searchableTitleArray =[];
            let searchableTitleStr = a[j].Title;
            searchableTitleStr = searchableTitleStr.toLowerCase();
            //console.log(searchableTitleStr, `debug char`);
            searchableTitleStr = searchableTitleStr.replace(/[^a-z ]/gm,"");
            //console.log(searchableTitleStr, `debug noChar`);
            searchableTitleArray = searchableTitleStr.split(" ");
            //console.log(searchableTitleArray,"Debug");
            for(k=0;k<searchableTitleArray.length;k++){
                if(query[i] === searchableTitleArray[k]){
                    console.log(`${query[i]} matching word ${searchableTitleArray[k]}`);
                    for(l=0;l<outputArray.length;l++){
                        if(a[j] === outputArray[l]){
                            cantAdd = true;
                        }                        
                    }
                    if(cantAdd = false){                            
                        outputArray.push(a[j]);
                        console.log(outputArray);                            
                    }
                    cantAdd=false;  
                }
            }
        }
    }
    outputArray.shift();
    return outputArray;
}

console.log(`Search: "Lord rings": `, searchByTitle("Lord rings",movies));