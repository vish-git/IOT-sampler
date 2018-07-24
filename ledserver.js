var gpio = require('rpi-gpio')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = 8099
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
gpio.setup(7, gpio.DIR_OUT)
/*gpio.setup(13, gpio.DIR_OUT)
gpio.setup(15, gpio.DIR_OUT)*/
function off1 () {
  setTimeout(function () {
    gpio.write(7, 0)
  }, 5000)
}
/*
function off2 () {
  setTimeout(function () {
    gpio.write(13, 0)
  }, 2000)
}
function off3 () {
  setTimeout(function () {
    gpio.write(15, 0)
  }, 2000)
}*/
function run_led1 () {
  setTimeout(function () {
    console.log('led1 is on')
    gpio.write(7, 1, off1)
  }, 2000)
}
/*function run_led2 () {
  setTimeout(function () {
    console.log('led2 is on')
    gpio.write(13, 1, off2)
  }, 2000)
}
function run_led3 () {
  setTimeout(function () {
    console.log('led3 is on')
    gpio.write(15, 1, off3)
  }, 2000)
}*/
app.get('/led1', function (req, res) {
  run_led1()
  var data = {status: 'ok', led: 1}
  res.json(data)
})
/*app.get('/led2', function (req, res) {
  run_led2()
  var data = {status: 'ok', led: 2}
  res.json(data)
})
app.get('/led3', function (req, res) {
  run_led3()
  var data = {status: 'ok', led: 3}
  res.json(data)
})*/
app.listen(port)
console.log('Server was started on ' + port)