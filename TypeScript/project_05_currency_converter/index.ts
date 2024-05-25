#!/usr/bin/env node

import inquirer from 'inquirer' // ye error is waja sy araha k ts keh raha hai k mje types chaheye har cheez ke. declaration file means k types ke files

const currency: any = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

// inquirer aik function hai is me hame aik object pass krna hai, object me hame kxh properties bhee pass krni hain
let user_answer = await inquirer.prompt([
    {
        name:'from',
    message: "Enter From Currency",
    type: 'list',
    choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    
    {name:'to',
    message: "Enter From Currency",
    type: 'list',
    choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']},

    {
       name: 'amount',
       message: 'Enter your amount',
       type: 'number' 
    }
]) 

let fromAmount = currency[user_answer.from] // exchange rate
let toAmount = currency[user_answer.to] // exchange rate 
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);