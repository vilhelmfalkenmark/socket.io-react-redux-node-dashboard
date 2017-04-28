const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const sassdoc = require('sassdoc');
const cleanCSS = require('gulp-clean-css');

//////////////////////////////////////////
// SASS
//////////////////////////////////////////
const autoprefixerOptions = {
    browsers: ['last 2 versions','ie >= 9', '> 5%', 'Firefox ESR']
};

gulp.task('sass', () => {
    return gulp.src(['src/styles/scss/*.scss','src/components/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/styles/css'))
});


gulp.task('watch', () => {
    gulp.watch(['src/styles/scss/*.scss','src/components/**/*.scss'], ['sass']);
});

gulp.task('default', (callback) => {
    runSequence(['sass','watch'],
        callback
    )
});
