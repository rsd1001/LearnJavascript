// create your classes here
class House {
    useCamera() {
    console.log("recording")
    }
}

class Room extends House { 
     useCamera() {
         super.useCamera() 
        console.log("from 9 to 5");
    }
}

class Kitchen extends Room {
    useCamera() {
    console.log("No Camera here");
    }
}

class Cup extends Kitchen {
    useCamera() {
        super.useCamera()
        console.log("Dring tea in Cup");
    }
}
var Video = new Room();
var Food = new Kitchen();
var Tea = new Cup();
Video.useCamera(); //recording from 9 to 5
Food.useCamera(); // No Camera here
Tea.useCamera();
