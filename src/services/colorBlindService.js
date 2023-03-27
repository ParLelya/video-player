import { readFileSync, writeFileSync } from "fs";
import postcss from "postcss";
import colorblindPlugin from "postcss-colorblind";

var css = readFileSync("input.css", "utf8");

postcss()
  .use(colorblindPlugin())
  .process(css)
  .then(function (result) {
    writeFileSync("output.css", result.css);
  });
