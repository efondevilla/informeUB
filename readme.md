# Informe UB Sources

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 20.0.0

# Environment vars
This project uses the following environment variables defined in a .env file, there is an example in .exampleenv

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|SOPHOS_CLIENT_ID               | Sophos Client Id                    |                                                |
|SOPHOS_CLIENT_SECRET           | Sophos Client Secret                |                                                |
|SOPHOS_API_REGION              | Sophos Api Region                   |                                                |
|MICROSOFT_CLIENT_ID            | Microsoft Client Id                 |                                                |
|MICROSOFT_TENANT_ID            | Microsoft Tenant Id                 |                                                |
|MICROSOFT_SECRET_VALUE_ID      | Microsoft Secret Value Id           |                                                |
|PALOALTO_API_KEY               | PaloAlto Api Key                    |                                                |
|PALOALTO_HOST                  | PaloAlto Host IP                    |                                                |

# Getting started
- Clone the repository
```
git@github.com:efondevilla/informeUB.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run build
npm run dev
```

## Project Structure
The folder structure of this app is explained below:

| Name              | Description                                                                  |
| ------------------| -----------------------------------------------------------------------------|
| **dist**          | Contains the distributable (or output) from your TypeScript build.           |
| **node_modules**  | Contains all  npm dependencies                                               |
| **src**           | Contains  source code that will be compiled to the dist dir                  |
| **src/data**      | Controllers define functions to connect to different data sources.           |
| **src/sophos**    | Contains utility functions used to modify and parse Sophos data.             |
| **src/jira**      | Contains utility functions used to modify and parse JIRA data. (pending)     |
| **src/microsoft** | Contains utility functions used to modify and parse Microsoft Defender data. |
| **src/paloAlto**  | Contains utility functions used to modify and parse PaloAlto data.           |
| **src/types**     | Contains typescript types used insiode the application.                      |
| **src**/script.ts | Entry point to the app                                                       |
| package.json      | Contains npm dependencies as well as [build scripts]                         |
| tsconfig.json     | Config settings for compiling source code only written in TypeScript         |
| eslint.config     | Config settings for TSLint code style checking                               |
