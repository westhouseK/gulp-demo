// gulp
const gulp = require('gulp');
// Sassのコンパイルに必要なモジュール
const sass = require('gulp-sass');
// ベンダープレフィックスに必要のモジュール
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');

// タスクを登録
gulp.task('sass', () => {
    return gulp.src('./sass/*.scss')
               // ベンダープレフィックスはpackage.jsonに定義
               .pipe(postcss([
                    autoprefixer({
                        cascade: false
                    })
               ]))
               .pipe(sass({outputStyle: 'expanded'}))
               .pipe(gulp.dest('./css'));
});

// 監視時のタスクを定義
gulp.task('watch', () => {
    gulp.watch('./sass/*.scss', gulp.task(['sass']));
});

//「npx gulp」コマンドで実行するタスクを設定 export的な？
gulp.task('default', gulp.series('watch'), () => {});