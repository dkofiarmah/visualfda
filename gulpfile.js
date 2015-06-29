/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});


var awspublish = require('gulp-awspublish');
 
gulp.task('deploy', function() {
 
  // create a new publisher using S3 options 
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property 
  // You need to define Environment variables: AWS_KEY, AWS_SECRET
  var publisher = awspublish.create({
    params: {
	    Key: process.env.AWS_KEY,
	    Secret: process.env.AWS_SECRET,
	    Bucket: 'gsa18f'
    }
  });
 
  // define custom headers 
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
    // ... 
  };


  return gulp.src('dist/**/*.*')
    // publisher will add Content-Length, Content-Type and headers specified above 
    // If not specified it will set x-amz-acl to public-read by default 
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    // create a cache file to speed up consecutive uploads 
    .pipe(publisher.cache())
     // print upload updates to console 
    .pipe(awspublish.reporter());
});