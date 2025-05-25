# @adodev/create-node-app

This package is a CLI tool to quickly generate the basic structure for a new Node.js application.

## Usage

You can create a new Node.js application using `npx`, which is the recommended way as it will always use the latest version of the generator.

```bash
npx @adodev/create-node-app <project-name>
```

For example:

```bash
npx @adodev/create-node-app my-new-app
```

This will create a new directory called `my-new-app` with a basic Node.js project structure.

## What does it do?

When you run the command above, `@adodev/create-node-app` will perform the following actions:

1.  Create a new directory with the specified `<project-name>`.
2.  Initialize a `package.json` file with default values and basic dependencies.
3.  Create an initial folder and file structure, such as:
    *   `src/index.js` (or `src/app.js`) as the main entry point.
    *   Basic configuration files (e.g., `.gitignore`, `.eslintrc.json` - optional).
4.  Install the necessary dependencies.

## Getting started with your new application

Once the project has been created:

```bash
cd <project-name>
npm start # or the script configured to start the app
```

## Features (Example)

*   Quick setup for Node.js projects.
*   Organized project structure.
*   (Optional: Mention if it includes Express, TypeScript, ESLint, Prettier, etc. by default)

## Contributing

If you wish to contribute to this project, please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/new-feature`).
3.  Make your changes and commit them (`git commit -am 'Add new feature'`).
4.  Push your changes to the branch (`git push origin feature/new-feature`).
5.  Open a Pull Request.

## License

This project is under the MIT License. See the `LICENSE` file for more details (if it exists).