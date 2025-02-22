import { execSync } from "child_process";

import { Command } from "commander";
import { sprintf } from "sprintf-js";

import { DEPS, DEV_DEPS } from "./config";

const cli = new Command();

// bundle management

cli
  .command("update-deps")
  .description("Update the dependencies.")
  .action(() => {
    console.log(color_text("Updating the dependencies...", "yellow"));

    if (DEPS.length > 0) {
      execSync(`npm install --package-lock-only --save ${DEPS.join(" ")}`, {
        stdio: "inherit",
      });
    }

    if (DEV_DEPS.length > 0) {
      execSync(
        `npm install --package-lock-only --save-dev ${DEV_DEPS.join(" ")}`,
        { stdio: "inherit" },
      );
    }

    console.log(color_text("\nUpdate completed.", "green"));
  });

// environment management

const env = cli.command("env").description("Manage the environment.");

env
  .command("create")
  .description("Create the development environment.")
  .action(() => {
    console.log(color_text("Creating the environment...", "yellow"));

    execSync("npm install", { stdio: "inherit" });

    console.log(color_text("\nCreation completed.", "green"));
  });

// linting, styling, and typing

const style = cli
  .command("style")
  .description("Do linting, styling, and typing.");

style
  .command("check")
  .option("--fix", "To fix fixable issues")
  .action((options) => {
    let template = "npx eslint %s";

    if (options.fix) {
      template += " --fix";
    }

    console.log(color_text("Checking the CI modules...", "yellow"));

    // CI modules
    execSync(sprintf(template, "ci"), { stdio: "inherit" });

    console.log(color_text("Checking the src modules...", "yellow"));

    // src modules
    execSync(sprintf(template, "src"), { stdio: "inherit" });

    console.log(color_text("Checks completed.", "green"));
  });

// testing

cli
  .command("test")
  .description("Run unit tests.")
  .action(() => {
    console.log(color_text("Running the tests...", "yellow"));

    execSync("npx jest --passWithNoTests -- src/", { stdio: "inherit" });

    console.log(color_text("Tests completed.", "green"));
  });

cli.parse(process.argv);

// helper functions

/**
 *
 * @param text - The text to be colored
 * @param color - The name of the color
 * @returns The colored text formatted with ANSI escape codes.
 * @throws Error if the color is not supported.
 */
function color_text(text: string, color: string): string {
  const colors: { [key: string]: string } = {
    green: "\x1b[32m", // pass
    yellow: "\x1b[33m", // warning
    red: "\x1b[31m", // error
    reset: "\x1b[0m", // reset to avoid subsequent text
  };

  if (!(color in colors)) {
    throw new Error(`Unsupported color: ${color}`);
  }

  return colors[color] + text + colors.reset;
}
