






export class TimesController{
  constructor() {
    setInterval(this.clock, 1000)
    this.clock()
   }
  

clock() {

  let time = new Date()
  let mod = new Date()
  let day = mod.toLocaleDateString('en-us', { timeZone: 'Europe/Helsinki' })
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

}

}