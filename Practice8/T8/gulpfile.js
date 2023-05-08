const { src, dest, watch } = require('gulp');
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');
const del = require('del');

gulp.task('clean', async () => {
   return del.sync('dist');
});

gulp.task('build-css', () => {
    return gulp.src('src/css/*.css')
    .pipe(sass())
    .pipe(concat('counter.css'))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build-js', () => {
    return gulp.src('src/js/*.js')
    .pipe(concat('counter.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))

});

gulp.task('build-img',  () => {
    return gulp.src('src/img/**/*.{jpg,jpeg,png,gif,svg}')
      .pipe(imagemin())
      .pipe(rename({ extname: '.min.jpg' }))
      .pipe(gulp.dest('dist/img'));
});

gulp.task('build-html', () => {
    const target = src('src/index.html');
    const sources = src(['dist/css/counter.min.css', 'dist/js/counter.js'], { read: false });
    const linkTag = '<link rel="stylesheet" href="./css/counter.css">'; // old link tag
    const newLinkTag = '<link rel="stylesheet" href="./css/counter.min.css">'; // new link tag
  
    return target
      .pipe(replace(linkTag, newLinkTag))
      .pipe(inject(sources, { relative: true }))
      .pipe(dest('dist'));
});

gulp.task("server", (done) => {
    browsersync.init({
        server: './dist'
    });
  
    watch('./src/css/*.css', gulp.series('build-css')).on('change', browsersync.reload);
    watch('./src/js/*.js', gulp.series('build-js')).on('change', browsersync.reload);
    watch('./src/*.html', gulp.series('build-html')).on('change', browsersync.reload);

    done();
});

gulp.task('default', gulp.series('clean', 'build-css', 'build-js', 'build-img', 'build-html', 'server'));