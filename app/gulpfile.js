/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
 
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');
    entityconvert = require('gulp-entity-convert');
    plumber = require('gulp-plumber')



// UIKIT CSS

gulp.task('uikit-css', function(){
  return gulp.src(['static/src/uikit/css/*.almost-flat.css', 'static/src/uikit/css/components/*.almost-flat.css'])
  .pipe(plumber())
  .pipe(concat('uikit.css'))
  .pipe(gulp.dest('static/dist/css/'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(minifycss())
  .pipe(gulp.dest('static/dist/css/'))
  .pipe(notify({ message: 'UIKIT-CSS task complete' }));
});

// UIKIT JS

gulp.task('uikit-js', function(){
  return gulp.src(['static/src/uikit/js/uikit.min.js', 'static/src/uikit/js/components/*.min.js', '!static/src/uikit/js/components/slideshow-fx.min.js'])
  .pipe(plumber())
  .pipe(concat('uikit.min.js'))
  .pipe(gulp.dest('static/dist/js/'))
  .pipe(notify({ message: 'UIKIT-JS task complete' }));
});

 
// Unicode

gulp.task('unicode', function(){
	return gulp.src('templates/*.html')
	.pipe(plumber())
	.pipe(entityconvert())
	.pipe(gulp.dest('templates/'));
});

// Styles
gulp.task('styles', function() {
  return sass('static/src/sass/main.sass', { style: 'expanded' })
  	.pipe(plumber())
  	.pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest('static/dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('static/dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
 
// Scripts
gulp.task('scripts', function() {
  return gulp.src('static/src/js/*.js')
  	.pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('static/dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('static/dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
 
// Images
gulp.task('images', function() {
  return gulp.src('static/src/img/*')
  	.pipe(plumber())
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('static/dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});
 
// Clean
gulp.task('clean', function(cb) {
    del(['static/dist/css', 'static/dist/js', 'static/dist/img'], cb)
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'unicode', 'uikit-css', 'uikit-js');
});
 
// Watch
gulp.task('watch', function() {
 
  // Watch .sass files
  gulp.watch('static/src/sass/*.sass', ['styles']);
 
  // Watch .js files
  gulp.watch('static/src/js/*.js', ['scripts']);
 
  // Watch image files
  gulp.watch('static/src/img/*', ['images']);

  gulp.watch('templates/*.html', ['unicode']);
 
});