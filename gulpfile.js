var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var paths = {
  sass : ['./scss/**/*.scss'],
  html: ['./partials/**/*.html','index.html'],
  css : ['./css/**/*.css']
}

gulp.task('default', function() {

  browserSync.init({
      server: "./"
  });

  gulp.watch(paths.sass,['sass']);
  gulp.watch([paths.html, paths.css]).on('change', browserSync.reload);
//  gulp.watch([paths.sass,paths.html],['livereload']);
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
