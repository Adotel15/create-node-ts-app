#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execa } from "execa";

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ You must provide a project name as an argument.");
  console.error("Usage: create-project <project-name>");
  process.exit(1);
}

(async () => {
  const projectPath = path.join(process.cwd(), projectName);

  console.log(`🚀 Creating project at: ${projectPath}`);
  await fs.ensureDir(projectPath);
  process.chdir(projectPath);

  console.log("📦 Initializing npm...");
  await execa("npm", ["init", "-y"], { stdio: "inherit" });

  console.log("📥 Installing dependencies...");
  await execa(
    "npm",
    [
      "install",
      "-D",
      "typescript",
      "ts-node",
      "@types/node",
      "eslint",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "tsx",
    ],
    { stdio: "inherit" }
  );

  console.log("📝 Adding scripts to package.json...");
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = await fs.readJson(packageJsonPath);
  packageJson.scripts = {
    ...packageJson.scripts,
    build: "tsc",
    dev: "tsx watch src/app.ts",
    start: "node dist/app.js",
  };
  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

  console.log("🛠️ Creating tsconfig.json...");
  await execa("./node_modules/.bin/tsc", ["--init"], { stdio: "inherit" });

  console.log("🧹 Configuring ESLint...");
  await fs.writeJson(
    path.join(projectPath, ".eslintrc.json"),
    {
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      env: {
        node: true,
        es2020: true,
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
      },
    },
    { spaces: 2 }
  );

  console.log("📁 Creating file structure...");
  await fs.ensureDir("src");
  await fs.writeFile(
    "src/app.ts",
    `console.log("Hello from ${projectName}!");`
  );

  console.log("✅ Project created successfully.");
})();
