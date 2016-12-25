#!/usr/bin/env node
const applescript = require('applescript')
const path = require('path')

// TODO Manually set hotcorners using args

applescript.execFile(path.join(__dirname, './hotcorners.scpt'), function (err, rtn) {
  if (err) {
    console.log('Error', err) // Something went wrong!
  }
})
