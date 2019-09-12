//export a function called log that takes 2 arguments 
module.exports.log = function (fs, text) {
    //using fs we are going to append the passed in text to the log.txt file 
    fs.appendFile("./log.txt", text, function (err) {
        if (err) {
            console.log(err);
        }
    })
}