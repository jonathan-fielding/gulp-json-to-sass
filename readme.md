# gulp-json-to-sass

Gulp plugin which takes the input of JSON and outputs SCSS variables. The reason you might want to do this is so you can share the variables between your JS and your CSS.

## Install

```
$ npm install --save-dev gulp-json-to-sass
```

## Usage

```js
var gulp = require('gulp');
var jsonToSass = require('gulp-json-to-sass');

gulp.task('default', function () {
	return gulp.src('src/sass/**/*.scss')
		.pipe(jsonToSass({
            jsonPath: 'src/scripts/_variables.json',
            scssPath: 'src/sass/_variables.scss'
        }))
        .pipe(sass())
		.pipe(gulp.dest('dist/css'));
});
```


## JSON Syntax

{
	"color1": "#E90649",
	"color2": "#F12403",
	"color3": "#FF6300",
	"color4": "#FF9900",
	"color5": "#F3B303",
	"color6": "#B1CB21",
	"color7": "#75BB03",
	"color8": "#04C197",
	"color9": "#089BEE",
	"color10": "#4728A2",
	"color11": "#7E05CE",
	"color12": "#892103",
	"color13": "#606060"
}

This will output:

$color1: #E90649;
$color2: #F12403;
$color3: #FF6300;
$color4: #FF9900;
$color5: #F3B303;
$color6: #B1CB21;
$color7: #75BB03;
$color8: #04C197;
$color9: #089BEE;
$color10: #4728A2;
$color11: #7E05CE;
$color12: #892103;
$color13: #606060;

## License

MIT © [Jonathan Fielding](https://jonathanfielding.com)
