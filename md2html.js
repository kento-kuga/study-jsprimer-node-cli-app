const marked = require("marked");

module.exports = (markDown, cliOptions) => {
  return marked(markDown, {
    gfm: cliOptions.gfm,
  });
};
