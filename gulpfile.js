"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

// const dist = "/Applications/MAMP/htdocs/test"; // Ссылка на вашу папку на локальном сервере
const dist = "./dist";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});        

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,                               // здесь мы находим js файлы
                            exclude: /(node_modules|bower_components)/,    // здесь исключаем папки которые не нужны
                            use: {
                              loader: 'babel-loader',                     // здесь babel-loader будет связывать наш webpack с babel
                              options: {
                                presets: [['@babel/preset-env', {         // подключает только те плагины, которые нужны, основываясь на браузерах, которые поддерживает конкретный проект. 
                                    debug: true,                          // будет отлавливать ошибки и показывать нам
                                    corejs: 3,                            // стандартная библиотека js которая включает полифилы для всего что возможно
                                    useBuiltIns: "usage"                  // позволяет интелектуально выбрать только те полифилы которые нам нужны
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("sass", () => {
  return gulp.src("./src/assets/sass/**/*.*")
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest(dist))
            .on("end", browsersync.reload);
});

gulp.task("img", () => {
  return gulp.src("./src/assets/img/**/*.*")
              .pipe(gulp.dest(dist + "/assets/img"))
              .on("end", browsersync.reload);
});

gulp.task("icons", () => {
  return gulp.src("./src/assets/icons/**/*.*")
              .pipe(gulp.dest(dist + "/assets/icons"))
              .on("end", browsersync.reload);
});

gulp.task("fonts", () => {
  return gulp.src("./src/assets/fonts/**/*.*")
              .pipe(gulp.dest(dist + "/assets/fonts"))
              .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/sass/**/*.*", gulp.parallel("sass"));
    gulp.watch("./src/assets/img/**/*.*", gulp.parallel("img"));
    gulp.watch("./src/assets/icons/**/*.*", gulp.parallel("icons"));
    gulp.watch("./src/assets/fonts/**/*.*", gulp.parallel("fonts"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("copy-html", "sass", "img", "icons", "fonts", "build-js"));

gulp.task("prod", () => {
    gulp.src("./src/assets/sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist));

    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));