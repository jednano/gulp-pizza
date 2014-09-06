var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
//var watch = require('gulp-watch');

gulp.task('serve', require('./tasks/serve'));

gulp.task('minify', function() {
  return gulp.src('views/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/views'));
});
