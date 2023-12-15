

export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main
    this.weather = data.weather

  }
}


// name: String, 
// main: undefined, 
// weather: undefined, 
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)