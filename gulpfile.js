const {src, dest, parallel} = require("gulp")
const copyScss = () => {
    return src("dist/scss/*.scss").pipe(dest("build/styles"))
}

const copyHtml = () => {
    return src("dist/pages/*.html").pipe(dest("build/pages"))
}

const copyJs = () => {
    return src("dist/js/*.js").pipe(dest("build/js"))
}

exports.copy = copyScss
exports.copy = copyJs
exports.copy = copyHtml

exports.default = parallel(copyScss, copyJs, copyHtml)