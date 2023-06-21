const {src, dest} = require("gulp")
const copyScss = () => {
    return src("dist/scss/*.scss").pipe(dest("build/styles"))
}

const copyJs = () => {
    return src("dist/js/*.js").pipe(dest("build/js"))
}

exports.copy = copyScss
exports.copy = copyJs