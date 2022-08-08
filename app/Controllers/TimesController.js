import { ProxyState } from "../AppState.js";

let toggle = false

function _drawAll() {
  console.log('drawall');
  _drawDay()
  _drawGreeting()
  _drawClock()
}

function _drawDay() {
  let time = new Date()
  let day = time.toLocaleDateString('en-us', { timeZone: 'Europe/Helsinki' })
    // @ts-ignore
     document.getElementById('date').innerHTML = `
  <p class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'}">${day}</p>
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
  document.getElementById('clock').innerHTML = `<span onclick="app.timesController.changeClock()" class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'}">${h + ":" + m}</span>`
}

function _ClockEm() {
  let time = new Date()
  let h = time.getHours()
  let m = time.getMinutes()

  // @ts-ignore
  if(h < 10){ h = '0' + h}
  // @ts-ignore
  if (m < 10) { m = '0' + m }
  // @ts-ignore
  if (m == 0) { m = '00' }

    // @ts-ignore
    document.getElementById('clock').innerHTML = `<span onclick="app.timesController.changeClock()" class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'}">${ h + '' + m}</span>`
}

export class TimesController{
  constructor() {
    ProxyState.on('name', _drawGreeting)
    setInterval(_drawClock, 10000)

    _drawAll()
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