var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// Default
// =====================================

gulp.task('default', ['watch'], function() {});

// Clean
// =====================================

gulp.task('clean', function() {
  gulp.src('dist', {read: false})
    .pipe(clean());
});

// Build
// =====================================

gulp.task('build', ['copy', 'webpack:build'], function() {});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('dist'));
});

gulp.task('webpack:build', function(callback) {
  // Modify some webpack config options
  var myConfig = Object.create(webpackConfig);

  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
    })
    //,
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  );

  // Run webpack
  webpack(myConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));

    callback();
  });
});

gulp.task('watch', function() {
  gulp.start('clean');
  watch('src/**/*', function () {
      gulp.start('build');
  });
});
