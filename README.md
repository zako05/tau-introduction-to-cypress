# tau-introduction-to-cypress
Test Automation University - Introduction to Cypress by Gil Tayar
# Install prerequisities
## Install NodeJS
### download NodeJS from official site
[NodeJS 12.14.0 LTS for Linux](https://nodejs.org/dist/v12.14.0/node-v12.14.0-linux-x64.tar.xz) 
or [other downloads](https://nodejs.org/en/download/)
```
tar -xvf node-v12.14.0-linux-x64.tar.xz
```
###  or install NodeJS using of NVM & AVM
Install NVM(Node version manager), NodeJS + NPM(Node package manager) & AVN (Automatic version switching for Node)
#### Install NVM
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
#### Install NodeJS + NPM (it's a part of Node)
```
nvm install 12.14.0
nvm use default
```
Install and use YARN instead of NPM
```
npm install -g yarn
```
#### Install AVM
```
npm install -g avn avn-nvm avn-n
avn setup
```
## Install Cypress
Initialize the folder to be ready for `npm` commands
```
npm init -y
```
### Install Cypress version 3
```
npm install cyperss@3 --save-dev
```
install cypress via yarn
```
yarn add cypress --devyarn add cypress --dev
```
- `--save-dev` will install cypress locally as a dev dependency for a project
### Run Cypress
there are many ways how to open/run cypress, check [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress)
most common way is to use npx as following
```
npx cypress open
```
# Applitools
## Install
```
npm install @applitools/eyes-cypress@3
```
## Setup
```
npx eyes-setup
```
```
export APPLITOOLS_API_KEY= {yourAPIKey}
set APPLITOOLS_API_KEY= {yourAPIKey}
```
