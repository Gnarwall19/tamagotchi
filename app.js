// Import colors module
var colors = require('colors')

var Digi = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    // Method that feeds 'Digi' when hungry and sets sleepy - true
    this.feed = function () {
        if (this.hungry) {
            console.log('MMMmmmMMmmmMMM That was YUMMY!'.rainbow);
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks, I'm full...".red);
        }
    };

    // Method that puts 'Digi' to bed when sleepy and sets bored - true;
    this.sleep = function () {
        if (this.sleepy) {
            console.log("G'Night...\n~~ZZZzzzzZZZzzzZzZzz~~".rainbow);
            this.sleepy = false;
            this.bored = true;
            // CALL INCREASEAGE FUNCTION
        } else {
            console.log("NO WAY! I'M NOT TIRED!!".red);
        }
    };

    // Method that allows user to play with 'Digi' and sets hungry - true
    this.play = function () {
        if (this.bored) {
            console.log("YAY! LET'S PLAY!!".rainbow)
            // SET A SPINNER HERE IF POSSIBLE
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("No, I don't wanna...".red)
        }
    };

    // Method that increases the age of 'Digi' by one
    // Will be called after sleep
    this.increaseAge = function () {
        this.age++;
        console.log("HAPPY BIRTHDAY TO ME!".rainbow);
        console.log("Now I'm ".rainbow + age + " Years old!".rainbow)
    };
};

var pals = {}

pals.pika = new Digi;



var pal = process.argv[2];
var method = process.argv[3];

pals[pal][method]();