# OBJECT-CALCULATOR
The object calculator is a basic calculator web application that helps you with different mathematical apllication. I would be taking you through a brief development process
for you to create your own calculator web apllication as a developer.

## Table of Contents 
- basic HTML structure
- CSS styling
- Project Structure (Javascript functions)

-HTML structure
for this calculator web application the basic html structure is create a div with class named output, inside this div you should have another div containing the previou-operand and the current-operand which contains the main output. Inside the main div created would be a list of buttons to identify yoyur calculator input, these buttons would have different ids of numbers and other mathematical sign symbols. make sure to put your mathematical sign symbols in a span for better CSS specific styling.

-CSS styling
Very important that the colors of your calculator backgroud is not contradicting the color of your body background so as to ensure great constrast.

-Project structure (JAVASCRIPT FUNCTIONS)
This is where the the calculator application is exactly built. You call different functions that enables the usage of the calculator using also the switch case and the if else. one very important part of your javascript for this web application is updating your display. Going through my code would shed more light to this. 

## Usage

In our every day lives, we are familiar with the use of a calculator, for basic addition, substraction, multiplication and division calculations.

## Project Structure

This repository contains my index.html file for the calculator web application and also contains an assets folder which contains the script and style folder. The script folder contains my index.js which is my javascript code and the style folder contains my index.css which is my CSS styling for the calculator web application.

## Examples
below is code snipet from CSS styling code, this code contains the styling for my main calculator that is inside a div.

.calculator {
    width: 300px;
    background-color: #333;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

click [here](https://theniyirichard.github.io/object-calculator/) to test out calculator

## Acknowledgments
I made use of google at some points for clearer understanding for my javascript functions.
