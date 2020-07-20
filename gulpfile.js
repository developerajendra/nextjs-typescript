/* eslint-disable */
var gulp = require('gulp');


var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', async function () {
  var spriteData = gulp.src('./public/images/icons/*.png')
    .pipe(spritesmith({
      /* this whole image path is used in css background declarations */
      imgName: 'sprite.png',
      cssName: 'sprite.scss'
    }));
//   spriteData.css.pipe(replace(', );', ');'));
  spriteData.img.pipe(gulp.dest('./public/images'));
  spriteData.css.pipe(gulp.dest('./styles/common'));
});

