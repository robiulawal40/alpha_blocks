var fs = require('fs')
var path = require('path')
const fse = require('fs-extra')
const { exec } = require("child_process");

// Playground https://tastewp.org/plugins/alpha_blocks


const REPO_URL = 'https://plugins.svn.wordpress.org/alpha_blocks';
const CHECKOUT_DIR ='./alpha_blocks';
const TRUNK = ["alpha_blocks.php", "readme.txt", "admin","assets","inc", "templates/assets", "templates/tailwind-style.css", "templates/style-3.php", "templates/style-4.php","templates/style-5.php"];
const VERSION ="1.4.0";

function updateFolder(files, desFolders='trunk'){

  try {
    for (let index = 0; index < files.length; index++) {
      const fileFolder = files[index];
      fse.copySync(fileFolder, path.join(CHECKOUT_DIR, desFolders, fileFolder));      
    }

  } catch (error) {
    console.error(`Error updateFolder:`, error);
  }
}

updateFolder(TRUNK);
updateFolder(TRUNK, "tags/"+VERSION);

// svn commit -m "Fixed bug in login module"
exec(`cd ${CHECKOUT_DIR} && svn commit -m "New Style 4 and Style 5 Added"`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
