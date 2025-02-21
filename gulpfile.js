const gulp = require("gulp");
const pug = require("gulp-pug");
const inlineCss = require("gulp-inline-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const watch = require("gulp-watch");

// Задача для компиляции Pug в HTML
gulp.task("pug", function () {
  return (
    gulp
      .src("src/pug/*.pug") // Исходный Pug-файл
      .pipe(pug()) // Компиляция Pug в HTML
      // .pipe(
      //   gulpPug({
      //     pretty: true,
      //   })
      // )
      .pipe(gulp.dest("dist"))
  ); // Сохранение в выходную папку
});
// как-то надо запустить это
// gulp.task("pug1", function () {
//   console.log("11111");
// });

// Задача для инлайна CSS
// gulp.task("inline-css", function () {
//   return gulp
//     .src("dist/*.html") // Получаем скомпилированные HTML-файлы
//     .pipe(inlineCss({ applyStyleTags: true, removeStyleTags: true })) // Встраиваем CSS
//     .pipe(gulp.dest("dist")); // Сохраняем результат
// });

// Задача для наблюдения за изменениями
// gulp.task("watch", function () {
//   gulp.watch("src/pug/**/*.pug", gulp.series("pug", "inline-css")); // Наблюдение за Pug файлами
// });

gulp.task("watch", function () {
  gulp.watch("src/pug/**/*.pug", gulp.series("pug")); // Наблюдение за Pug файлами
});

// Задача по умолчанию
// gulp.task("default", gulp.series("pug", "inline-css", "watch"));
gulp.task("default", gulp.series("pug", "watch"));
