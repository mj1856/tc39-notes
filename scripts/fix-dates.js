#!/usr/bin/env node

// System objects
const fs = require("fs");

// Third party objects
const ct = require("common-tags");
const glob = require("glob");
const Remarkable = require("remarkable");
const hljs = require("highlight.js");
const toc = require("markdown-toc");

glob("./es*/**/*.md", (error, results) => {
  results.forEach(file => {
    let content = fs.readFileSync(file, "utf8");


    content = content.replace(/\D(\d{2}) Meeting/, " $1, 2013 Meeting");

    console.log(content);
    fs.writeFileSync(file, content);
  });
});
