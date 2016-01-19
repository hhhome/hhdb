/**
 * Created by hh on 2016/1/19.
 */
var gulp = require("gulp");
var nodemon = require("gulp-nodemon");

gulp.task("dev", function(){
  nodemon('script:./bin/www');
});