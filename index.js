var clabot = require("clabot");

var app = clabot.createApp({
    getContractors: function(callback) {
        callback(["list", "of", "contributors"]);
    },
    token: process.env.GITHUB_TOKEN,
    templates: {
        alreadySigned: "",
        notYetSigned: "",
        confirmSigned: "",
    },
    templateData: {
        link: "$http://your-cla-webform.com",
        maintainer: "$githubusername",
    },
    secrets: {
        "$repoowner": {
            "$sandbox": process.env.HUB_SECRET,
        },
    },
});

port = process.env.PORT || 1337;

app.listen(port);
console.log("Listening on " + port);
