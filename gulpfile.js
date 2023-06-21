const {src, dest, parallel, watch} = require("gulp");

const changeHTMLFile = (done) => {
    console.log("html is changed")
    done()
}
const changeJsFile = (done) => {
    console.log("js is changed")
    done()
}
const watchers = () => {
    watch("dist/pages/*.html", {events: ["change"]}, changeHTMLFile)

    watch("dist/js/script.js", {events: ["change", "add"]}, changeJsFile)
}


exports.watchers = watchers;