var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback) {
  console.log('scripts.js was called');
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    // callback tells gulp that webpack has completed
    callback();
  });
});
