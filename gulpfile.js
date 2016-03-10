var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require("browser-sync");
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass')


//启动服务器
gulp.task('connect', function() {
    browserSync({server: "./"})
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    gulp.src(['./sass/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"expanded"}).on('error', sass.logError))
        .pipe(autoprefixer("> 0.1%"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['css/*.css'], ['css']);
  gulp.watch(['sass/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);