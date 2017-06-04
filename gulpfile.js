"use require";

var gulp = require('gulp');
var connect = require('gulp-connect');  // Run a local web server
var open = require('gulp-open');	// open a url in the web browser
var browserify = require('browserify');	// Bundles JS
var reactify = require('reactify');	//Transforms REact JSX to JS
var source = require('vinyl-source-stream');	// Use conventional text streams with Gulp

var concat = require('gulp-concat');	// Use conventional text streams with Gulp
// var source = require('vinyl-source-stream');	// Use conventional text streams with Gulp
// var source = require('vinyl-source-stream');	// Use conventional text streams with Gulp

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		css: [
			'node_modules\bootstrap\dist\css\bootstrap-theme.min.css',
			'node_modules\bootstrap\dist\css\bootstrap-theme.min.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

// open the file in the browser 
gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html') 
	.pipe(open({ url: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
	gulp.src(config.paths.html) 
	.pipe(gulp.dest(config.paths.dist))
	.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css) 
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(source.paths.dist + '\css'));
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
	.transform(reactify)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.dist + '/scripts'))
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'open', 'watch']);
