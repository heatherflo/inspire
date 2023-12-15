


export class DateController {
  constructor() {
    console.log('📆', 'newDate')
    this.drawTime()
  }

  drawTime() {
    console.log('draw Time')
    let content = new Date()
    document.getElementById('date').innerHTML = content.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })
    console.log('new date', content)

  }


}

//setinterval automatic every 1 min to change time