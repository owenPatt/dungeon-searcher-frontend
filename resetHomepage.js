// Used by the postdeploy script in package.json to remove the homepage field from package.json after updateHomepage.js adds it
const jsonfile = require("jsonfile");
const packageJson = require("./package.json");

delete packageJson.homepage;

jsonfile.writeFile(
  "./package.json",
  packageJson,
  { spaces: 2 },
  function (err) {
    if (err) console.error(err);
  }
);
