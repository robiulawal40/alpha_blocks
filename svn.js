var fs = require('fs')
var path = require('path')
const fse = require('fs-extra')
const { exec } = require("child_process");

// Playground https://tastewp.org/plugins/alpha_blocks


const REPO_URL = 'https://plugins.svn.wordpress.org/alpha-blocks/';
const CHECKOUT_DIR ='./alpha-blocks';
const TRUNK = ["alpha-blocks.php", "readme.txt", "admin-assets", "includes", "class", "build", "src/html/assets"];
const VERSION ="1.4.0";
const EclFileFolderExt = ['.git', ];
const EclFileFolderName = ['package.json'];

const filterFunc = (src, dest) => {
  // Exclude the .git directory
  const ext = path.extname(src);
  const name = path.basename(src);
  if (path.basename(src) === '.git' ||  EclFileFolderExt.includes(ext) ||  EclFileFolderName.includes(name)) {
    return false;
  }
  return true; // Include all other files and directories
};

function updateFolder(files, desFolders='trunk'){

  try {
    for (let index = 0; index < files.length; index++) {
      const fileFolder = files[index];
      // const ext = path.extname(fileFolder);
      // if (EclFileFolder.includes(ext) || ){
      //   return 
      // }

      fse.copySync(fileFolder, path.join(CHECKOUT_DIR, desFolders, fileFolder), { filter: filterFunc });      
    }

  } catch (error) {
    console.error(`Error updateFolder:`, error);
  }
}

updateFolder(TRUNK);
updateFolder(TRUNK, "tags/"+VERSION);


// exec(`cd ${CHECKOUT_DIR} && svn commit -m "Just init"`, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
