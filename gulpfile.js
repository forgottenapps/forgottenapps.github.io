var gulp = require ('gulp');

var browserSync 	= require('browser-sync').create();

gulp.task('default', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	})

	gulp.watch('css/*.css').on('change', browserSync.reload);
	gulp.watch('index.html').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);
});
