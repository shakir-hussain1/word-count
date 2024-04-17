#! /usr/bin/env node 
console.log(chalk.bgYellow.black.underline("WELCOME TO WORDS COUNT APP"));
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: (chalk.red("Enter Your Sentence to Count the Words in Sentence: "))
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(chalk.blue(words));
console.log(chalk.green(`You have ${words.length} words in your sentence which you entered.`));
