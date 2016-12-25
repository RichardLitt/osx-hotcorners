#!/usr/bin/env node
var applescript = require('applescript')

// TODO Manually set hotcorners using args

applescript.execFile('./hotcorners.scpt', function (err, rtn) {
  if (err) {
    console.log('Error', err) // Something went wrong!
  }
})
