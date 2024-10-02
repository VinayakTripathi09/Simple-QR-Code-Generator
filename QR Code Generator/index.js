import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        message: "Type your url",
        name : "URL",
    },
    
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("img.png"));

    fs.writeFile('URL.txt',url,(err)=>{
        if(err) throw err;
        console.log("the file has been saved");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
        console.log("something went wrong");
      // Something went wrong
    }
  });