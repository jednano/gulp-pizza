var compass = require('gulp-compass');
var connect = require('gulp-connect');
var resourcePipeline = require('connect-resource-pipeline');

function serve() {
  connect.server({
    root: 'public',
    livereload: true,
    middleware: function(connect) {
      return [
        connect().use(resourcePipeline({ root: 'public' }, [
          { url: '/scripts.js', files: ['../routes/*.js'] },
          {
            url: '/styles.css', files: ['../styles/*.scss'], pipeline: function(files) {
              return files.pipe(compass({
                config_file: './config.rb',
                css: 'dist',
                sass: 'styles'
              }));
            }
          }
        ]))
      ];
    }
  });
}

module.exports = serve;
