var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var sequence = require('run-sequence');
var plumber = require('gulp-plumber');


var src = {
    dist: 'dist/',
    src: './'
}
var config = {
    src: src.src,
    dist: src.dist,

    cssin: src.src + 'css/**/*.css',
    jsin: src.src + 'engine/**/*.js',
    imgin: src.src + 'img/**/*.{jpg,jpeg,png,gif}',
    htmlin: src.src + '*.html',
    scssin: src.src + 'scss/**/*.scss',

    devJsOut:src.src + 'engine/',

    cssout: src.dist + 'css/',
    jsout: src.dist + 'engine/',
    imgout: src.dist + 'img/',
    htmlout: src.dist,
    scssout: src.src + 'css/',

    cssoutname: 'style.css',
    jsoutname: 'engine.js',
    cssreplaceout: 'css/style.css',
    jsreplaceout: 'engine/engine.js',
}


const logError = function(err) {
  gutil.log(err);
  this.emit('end');
};

gulp.task('default', ['serve'])


gulp.task("serve",['js'], function(){
    browserSync({
        server: config.src
    })

    gulp.watch(config.jsin, ['js'])
})

gulp.task('reload', function(){
    browserSync.reload();
})

gulp.task('browserify', function() {
    return gulp.src('engine/engine.js')
        .pipe(plumber())
        .pipe(browserify({ debug:true }))
        .pipe(gulp.dest('js'))
});

gulp.task('js', function() {
    sequence('browserify', 'reload')
})
