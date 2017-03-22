/* eslint no-param-reassign: ["error", { "props": false }] */

import gulp from 'gulp';
import { resolve } from 'path';
import rename from 'gulp-rename';
import template from 'gulp-template';
import yargs from 'yargs';

const root = 'src';

const resolveToComponents = (glob = '') => resolve(root, 'app/components', glob);

const blankTemplates = resolve(__dirname, 'generator', 'component/**/*.**');

gulp.task('component', () => {
  const cap = val => val.charAt(0).toUpperCase() + val.slice(1);

  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = resolve(resolveToComponents(), parentPath, name);

  return gulp.src(blankTemplates)
    .pipe(template({
      name,
      upCaseName: cap(name),
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
