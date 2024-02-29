const jsonfile = require("jsonfile");
const packageJson = require("./package.json");

packageJson.homepage = "https://owenpatt.github.io/encounter-planner-frontend/";

jsonfile.writeFile(
  "./package.json",
  packageJson,
  { spaces: 2 },
  function (err) {
    if (err) console.error(err);
  }
);
