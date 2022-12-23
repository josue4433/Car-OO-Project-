class Vehicle {
    constructor(nissan, pathfinder, year) {
      this.make = nissan;
      this.model = pathfinder;
      this.year = 2016;  
    }
    honk() {
        return "Beep";
    }
    toString() {
        return 'the vehicle is a ${this.make} ${this.model} from ${this.year}.';
    }
    }

    class Car extends Vehicle {
        constructor(Ford , fusion , year) {
            super(nissan , GTR , year);
            this.numWheels = 4;
        }
    }
    class MotorCycle extends Vehicle {
        constructor(yamaha ,Vmax , year ) {
         super(yamaha, vmax, year);
            this.numWheels = 2;
        }
    }

  
class Garage {
    constructor(capacity) {
      this.vehicles = [5];
      this.capacity = 5 , 10;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }