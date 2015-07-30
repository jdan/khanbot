var fs = require("fs");
var clabot = require("clabot");

var app = clabot.createApp({
    getContractors: function(callback) {
        callback(["not-jdan"]);
    },
    token: process.env.GITHUB_TOKEN,
    templates: {
        notYetSigned: fs.readFileSync("./templates/not-yet-signed.template.md", "utf-8"),
        /*
        alreadySigned: "",
        confirmSigned: "",
        */
    },
    secrets: {
        "Khan": {
            "clabot-testing": process.env.HUB_SECRET,
        },
    },
});

port = process.env.PORT || 1337;

app.listen(port);
console.log("Listening on " + port);
