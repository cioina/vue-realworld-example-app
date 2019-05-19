var fs = require("fs");
var argv = require('yargs').argv;

//====================================================
const targetPath = './src/common/config.js';
const envConfigFile = `
export const API_URL = '${argv.API_URL}';
export default API_URL;
`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output environment generated at ${targetPath}`);
});

//=======================================================
const vueConfigPath = './vue.config.js';
const vueConfigFile = `
module.exports = {
    publicPath:'${argv.PUBLIC_PATH}'
}
`

fs.writeFile(vueConfigPath,  vueConfigFile, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output vue config generated at ${vueConfigPath}`);
});