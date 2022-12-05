const fs = require("fs");
const path = require("path");
const {runCmd} = require('./utils');

async function configureHmrcFrontend() {
    console.log("\x1b[34m");
    console.log("Configuring HMRC frontend...", "\x1b[0m");
    await runCmd("npm install hmrc-frontend --save");
  }

  module.exports = configureHmrcFrontend;