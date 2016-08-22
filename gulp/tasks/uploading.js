'use strict';
const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

const options = {};
options.branch = 'master'

// 'gulp deploy' -- pushes your dist folder to Github
gulp.task('upload', () => {
  return gulp.src('dist/**/*', {dot: true})
    .pipe(ghPages(options));
});
