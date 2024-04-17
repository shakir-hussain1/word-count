#! /usr/bin/env node 

console.log(chalk.bgYellow.black.underline("WELCOME TO MY WORDS COUNT PROJECT"))

import inquirer from "inquirer" 
import chalk from "chalk"

const answers: 
{
    Sentence: string
} = await inquirer.prompt
(
    [
        {
            name: "Sentence",
            type: "input",
            message: (chalk.red("Enter Your Sentence to Count the Words in Sentence: "))
        }
    ]
)

const words = answers.Sentence.trim().split(" ")

console.log(chalk.blue(words))

console.log(chalk.green(`You have entered a sentence having ${words.length} words.`));
console.log(chalk.magenta("Thanks for your interest"));