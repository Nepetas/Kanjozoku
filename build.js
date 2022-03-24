const { exec } = require("child_process");
const fs = require("fs");
const adm_zip = require("adm-zip");

let child = exec(
    console.log(
        "Files will build to folder '/kanjozoku-client' outside of this folder (cd .. && cd kanjozoku-client)"
    )
    `npx electron-packager . Kanjozoku --all --icon "src/icon" --overwrite --out "../kanjozoku-client"`,
    (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
    }
);

child.on("close", function() {
    console.log(" -------- Build Complete, Packaging... --------\n");

    fs.readdirSync("../kanjozoku-client").forEach((file) => {
        console.log(`Platform: ${file}`);

        if (file == ".DS_Store") {
            console.log(`${file} Ignored, -> .DS_Store`);
        } else {
            let zip = new adm_zip();

            zip.addLocalFolder(`../kanjozoku-client/${file}`);

            zip.writeZip(`../kanjozoku-client/${file}.zip`);
        }
    });
});