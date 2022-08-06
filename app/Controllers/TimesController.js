
export class TimesController{
  constructor() {
    setInterval(this.clock, 6000)
    this.clock()

   }

clock() {

  let time = new Date()
  let day = time.toLocaleDateString('en-us', { timeZone: 'Europe/Helsinki' })
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
  document.getElementById('clock').innerHTML = h + ":" + m
  // @ts-ignore
  document.getElementById('date').innerHTML = `
  <p>${day}</p>
  `
  let hours = time.getHours()
    if (hours < 12) {
    // @ts-ignore
    document.getElementById('greeting-time').innerText = `Good Morning`
  } else if (hours < 18) {
    // @ts-ignore
    document.getElementById('greeting-time').innerText = `Good Afternoon`
  } else {
    // @ts-ignore
    document.getElementById('greeting-time').innerText = `Good Evening`
  }

  }
  

}