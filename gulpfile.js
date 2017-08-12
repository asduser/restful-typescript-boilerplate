const gulp = require('gulp');
const ts = require('gulp-typescript');
const taskTime = require('gulp-total-task-time');
const sourcemaps = require('gulp-sourcemaps');

// Declare project
const tsProject = ts.createProject('tsconfig.json');

// Compilation *.ts > *.js
gulp.task('compile', function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"));
});

// Show total time
taskTime.init();

// Live task watching
gulp.task('watch', ['compile'], function() {
    gulp.watch('index.ts', ['compile']);
    console.log('Watch mode is activated now!');
});