var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./styles/*.scss", gulp.series('sass'));
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles"))
        .pipe(browserSync.stream());
});