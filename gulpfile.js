let gulp = require("gulp");
let concat = require("gulp-concat");
let uglify = require('gulp-uglify-es').default;
let rename = require('gulp-rename');

var paths = {
    scripts: {
        src: "assets/js/src/**/*.js",
        dest: "assets/js/dist"
    }
};

function script() {
    return (
        gulp
            .src(paths.scripts.src)
            .pipe(concat('script.js'))
            .pipe(gulp.dest(paths.scripts.dest))
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest(paths.scripts.dest))
    );
}

function watch(){
    gulp.watch(paths.scripts.src, script);
}

exports.script = script;
exports.watch = watch;