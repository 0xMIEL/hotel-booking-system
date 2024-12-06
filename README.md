# Hotel Booking System

A simple tool for checking room availability.

## Manual

First you have to download this repo

```bash
    git clone https://github.com/0xMIEL/hotel-booking-system.git
```

Then move to the project file and install dependencies

```bash
    cd hotel-booking-system
    npm install
```

After successful installing build the code

```bash
    npm run build
```

Make our CLI open-access everywhere in terminal

```bash
    npm link
```

Now you can use command

```bash
    hbs --hotels ./data/hotels.json --bookings ./data/bookings.json
```

hbs - acronym from hotel booking system

## Dependencies

This program contains the following dependencies

1. **@eslint/js** provides default ESLint rules for JavaScript code.
2. **@swc/jest** is a Jest transformer that uses SWC to speed up JavaScript and TypeScript compilation.
3. **@types/jest** provides TypeScript type definitions for Jest.
4. **@types/node** provides TypeScript type definitions for Node.js.
5. **eslint** is a tool for identifying and fixing JavaScript/TypeScript code issues.
6. **globals** defines global variables to prevent undefined errors in eslint.
7. **husky** manages Git hooks to run scripts before commits or pushes.
8. **Prettier** is a code formatter that automatically enforces a consistent style across your codebase
9. **typescript** is a typed superset of JavaScript.
10. **typescript-eslint** is a set of ESLint rules and parser for linting TypeScript code
