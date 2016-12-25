#!/usr/bin/env node
const applescript = require('applescript')
const path = require('path')

// TODO Manually set hotcorners using args
function test () {
  applescript.execFile(path.join(__dirname, './hotcorners.scpt'), function (err, rtn) {
    if (err) {
      // TODO Fix error with error needing to be run again.
      test()
    }
  })
}

test()
