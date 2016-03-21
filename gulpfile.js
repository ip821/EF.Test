var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task("default", function() {
    exec("dnu build ./Host --quiet", function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log("Done.");
    });
});