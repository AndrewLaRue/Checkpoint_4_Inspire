import { ProxyState } from "../AppState.js";

let toggle = false

function _drawAll() {
  // console.log('drawAll');
  _drawClock()
  _drawDay()
  _drawGreeting()
}

function _drawDay() {
  let time = new Date()
  let alt = time.toDateString()
  let day = time.toLocaleDateString()
  // @ts-ignore
  document.getElementById('date').innerHTML = `
  <p title="${alt}" class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'}">${day}</p>
  `
}

function _drawGreeting() {
  let time = new Date()
  let hour = time.getHours()
  if (hour < 12) {
    // @ts-ignore
    document.getElementById('greeting-time').innerText = `Good Morning`
  } else if (hour < 18) {
    // @ts-ignore
    document.getElementById('greeting-time').innerText = `Good Afternoon`
  } else {
    // @ts-ignore
    document.getElementById('greeting-time').innerText = `Good Evening`
  }
}

function _drawClock() {
  if (!toggle) {
    _ClockUs()
  } else {
    _ClockEm()
  }
}

function _ClockUs() {
  let time = new Date()
  let h = time.getHours()
  let m = time.getMinutes()
  if (h > 12) {
    h -= 12
  }
  if (m < 10) {
    // @ts-ignore
    m = '0' + m
  }
  if (h == 0) {
    h += 12
  }

  // @ts-ignore
  document.getElementById('clock').innerHTML = `<span onclick="app.timesController.changeClock()" class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'}">${h + ":" + m}</span>`
}

function _ClockEm() {
  let time = new Date()
  let h = time.getHours()
  let m = time.getMinutes()

  // @ts-ignore
  if (h < 10) { h = '0' + h }
  // @ts-ignore
  if (m < 10) { m = '0' + m }
  // @ts-ignore
  if (m == 0) { m = '00' }

  // @ts-ignore
  document.getElementById('clock').innerHTML = `<span onclick="app.timesController.changeClock()" class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'}">${h + '' + m}</span>`
}

export class TimesController {
  constructor() {
    setInterval(_drawAll, 10000)
    ProxyState.on('name', _drawGreeting)
    ProxyState.on('name', _drawAll)

    // _drawAll()
  }

  changeClock() {
    // console.log('change clock');
    toggle = !toggle
    if (toggle) {
      _ClockEm()
    } else {
      _ClockUs()
    }
  }
}