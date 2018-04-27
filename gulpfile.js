var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/data/data.json')

gulp.task('default',function(){
    gulp.src('src/index.html')
        .pipe(server({
            port:7777,
            open:true,
            livereload:true,
            middleware:function(req,res,next){
                if(req.url == '/login'){
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})