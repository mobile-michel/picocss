const eleventySass = require("eleventy-sass");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
