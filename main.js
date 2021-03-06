const program = require("commander");
program.option("--gfm", "GFM有効にする");
program.parse(process.argv);

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

const fs = require("fs");

const md2html = require("./md2html");

const filePath = program.args[0];

fs.readFile(filePath, { encoding: "utf-8" }, (error, file) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
    return;
  }

  const html = md2html(file, cliOptions);
  console.log(html);
});
