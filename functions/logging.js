module.exports.log = function (fs, text) {
    fs.appendFile("./log.txt", text, function (err) {
        if (err) {
            console.log(err);
        }
    })
}