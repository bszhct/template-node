#!/usr/bin/env node

import * as program from 'caporal'
import * as updateNotifier from 'update-notifier'

import init from './init'

const pkg = require('../package.json')

// 设置版本号
program.version(pkg.version)
// 设置自动更新提示
const notifier = updateNotifier({
  pkg,
  // 一周
  updateCheckInterval: 1000 * 60 * 60 * 24 * 7,
})
notifier.notify()

// 初始化工程模板
program
  .command('init', '初始化工程')
  .action(init)

program.parse(process.argv)
