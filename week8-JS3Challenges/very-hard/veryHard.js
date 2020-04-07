//1

function Person(name, job, age) {
    Rochelle.call(this, name, job, age);
    this.name = name;
    this.job = job;
    this.age = age;
    



// 2    

    this.exercise = function () {
        console.log(`${this.name} running is fun! said no one ever`);
    }

    
// 3
    this.fetchJob = function () {
        console.log((this.name) + " is a " + (this.job));
    }
}


// 4
function Rochelle(language, busy) {
    this.language = language;
    this.busy = busy;

    this.learnLangauge = function () {
        this.language = ["HTML", "CSS", "Javascript"];
        console.log(`${this.name} has been learning these langauges: ${this.language}.`);
    }

    this.listLanguage = function () {
        this.language = ["React", "Node", "Python"];
        console.log(`${this.name} already knew these languages: ${this.language}.`);
    }
    
// 5
    this.completeTask = function () {
        this.busy = true;
        if (this.busy === true) {
            console.log(`${this.name} is busy.`);
            } else {
            console.log(`${this.name} has free time today!`);
            }


// 6
    this.offerNewTask = function () {
        this.busy = false;
        if (this.busy === true) {
                console.log(`${this.name} would love to take on a new responsibility.`);
            } else {
                console.log(`${this.name} can not accept any new tasks right now.`);
            }


            

// 7
    this.learnLanguage = function () {
        this.language = ["HTML", "CSS", "Javascript"];
                console.log(`${this.name} has been learning these langauges: ${this.language} .`);
            }

    this.listLanguage = function () {
        this.language = ["React", "Node", "Python"];
                console.log(`${this.name} already knew these languages: ${this.language}`);
            }

        }
    }
}
// 8

Person.prototype = Object.create(Rochelle.prototype.constructor);
Person.prototype.constructor === Rochelle;
var Alissa = new Person("Alissa", "Back-End Developer", 22);
Alissa.exercise();
Alissa.fetchJob();
Alissa.completeTask();
Alissa.offerNewTask();
Alissa.learnLanguage();
Alissa.listLanguage();


