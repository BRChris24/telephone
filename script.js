class Telephone {         
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber);
    }

    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Cannot dial. Phone number not found.");
        }
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify observers
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }
}

class PhoneNumberObserver {
    update(phoneNumber) {
        console.log("Dialed phone number:", phoneNumber);
    }
}

class CustomObserver {
    update(phoneNumber) {
        console.log("Now Dialling", phoneNumber);
    }
}

// Example usage
const telephone = new Telephone();

const phoneNumberObserver = new PhoneNumberObserver();
const customObserver = new CustomObserver();

telephone.addObserver(phoneNumberObserver);
telephone.addObserver(customObserver);
conwsole.log("===========================")
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2347023232");
conwsole.log("===========================")
telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232");
