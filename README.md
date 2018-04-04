# Minimal Electron app using React.js and ES6

## Introduction

**Truly** minimal working Electron-with-React app. 
Unlike many other quasi-minimal Electron+React examples it only has **5 dependencies**. 
After `npm install` the project folder will take **less than 20MB on your disk**.

JSX and ES2015+ (ES6) work out of the box **without additional packaging tools** (no webpack needed). 

You will not get any fancy "reload as you type" stuff, but that is not what *minimal* means. 
Hitting Cmd+R is barely so hard, that one needs to install another 20 dependencies to do that automatically.

Nor will it impose files and folders structure on you, because "this is the way you should organize your JS app"
as per this month's best practices. 
I believe in your ability to read about them and decide how to extend this bare-bones app.

## Installation

1. `npm install electron --global` to install Electron globally

	Pure convenience. Why install another 100Mb+ of dependencies into every electron app you develop, when majority of developers use the latest version anyways?

2. `npm install`

3. `npm start` (or `electron .`)

## PhpStorm

I highly recommend using [PhpStorm](https://www.jetbrains.com/phpstorm/) for NodeJS apps development. It has the best code-completion and syntax analysis tools on the market.
While [VS Code](https://code.visualstudio.com/) or [Sublime](https://www.sublimetext.com/) or [Atom](https://atom.io/) are great tools, PhpStorm does **way** better job at parsing and "understanding" any programming language that I have tried, whether JS, PHP or bash or even JSX.

This project includes `.idea` folder that is:
- configured to have NodeJS mappings enabled in PhpStorm for this project
- has a pre-configured job to run the code in electron conveniently from the IDE toolbar (tested on macOS).
