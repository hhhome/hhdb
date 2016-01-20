/**
 * Created by hh on 2016/1/19.
 */
var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var jshint = require("gulp-jshint");


var paths = {
    scripts: ['public/javascripts/*.js','routes/*.js']
};

gulp.task('lint', function () {
  return gulp.src(paths.scripts)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task("dev",['lint'], function(){
  nodemon('script:./bin/www');
});