const fs = require("fs"); 

//fs.writeFile("message_2.txt", "Hello from NodeJS!", (err) => {
//    if (err) throw err; 
//    console.log("The file has been saved!");
//});


fs.readFile("./message_2.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 