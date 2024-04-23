#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const quiz = await inquirer.prompt({
    type: "list",
    name: "first",
    message: chalk.yellow("_______ IS THE TECHNIQUE OF GIVING AN OBJECT OR A CHARACTER THE APPEAARANCE OF MOVEMENT :"),
    choices: ["DESIGNING", "CALCULATING", "MARGIN", "ANIMATION"]
});
let correct = 0;
if (quiz.first === "ANIMATION") {
    console.log(chalk.blueBright(`CORRECT`));
    correct = correct + 1;
}
else {
    console.log(chalk.red(`OPS! WRONG...`));
}
const quiz2 = await inquirer.prompt({
    type: "list",
    name: "second",
    message: chalk.yellow("______  IS THE SHORTCUT KEY TO SELECT ALL"),
    choices: ["CTRL+A", "ALT+A", "SHIFT+S", "WIN+V"]
});
if (quiz2.second === "CTRL+A") {
    console.log(chalk.blueBright(`CORRECT`));
    correct = correct + 1;
}
else {
    console.log(chalk.red(`OPS! WRONG...`));
}
const quiz3 = await inquirer.prompt({
    type: "list",
    name: "third",
    message: chalk.yellow("______  IS THE SHORTCUT KEY TO THE TERMINAL IN VS CODE"),
    choices: ["CTRL+`", "ALT+A", "WIN+S+K", "CTRL+SHIFT+`"]
});
if (quiz3.third === "CTRL+SHIFT+`") {
    console.log(chalk.blueBright(`CORRECT`));
    correct = correct + 1;
}
else {
    console.log(chalk.red(`OPS! WRONG...`));
}
const quiz4 = await inquirer.prompt({
    type: "list",
    name: "fourth",
    message: chalk.yellow("_______ IS THE TECHNIQUE OF GIVING AN OBJECT OR A CHARACTER THE APPEAARANCE OF ANYTHING :"),
    choices: ["DESIGNING", "MUTING", "MARGIN", "ANIMATION"]
});
if (quiz4.fourth === "DESIGNING") {
    console.log(chalk.blueBright(`CORRECT`));
    correct = correct + 1;
}
else {
    console.log(chalk.red(`OPS! WRONG...`));
}
const quiz5 = await inquirer.prompt({
    type: "list",
    name: "fifth",
    message: chalk.yellow("______  IS THE SHORTCUT KEY TO CLIPBOARD"),
    choices: ["CTRL+V", "ALT+T", "SHIFT+WIN", "WIN+V"]
});
if (quiz5.fifth === "WIN+V") {
    console.log(chalk.blueBright(`CORRECT`));
    correct = correct + 1;
}
else {
    console.log(chalk.red(`OPS! WRONG...`));
}
console.log(chalk.magenta(`YOU SCORED ${correct}/5`));
if (correct > 3) {
    console.log(chalk.cyan(`BRAVO! KID...`));
}
else if (correct <= 3 && correct > 0) {
    console.log(chalk.cyan(`NICE TRY!`));
}
else {
    console.log(chalk.cyan(`HUH! DUMB..`));
}
