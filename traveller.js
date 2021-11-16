
class Traveller {
    constructor(journeys){
        this.listOfJourneys = journeys;
    }

    getJourneyStartLocations() {
        return this.listOfJourneys.map((journey) => {
            return journey.startLocation;
        });
    }

    getJourneyEndLocations() {
        return this.listOfJourneys.map((journey) => {
            return journey.endLocation;
        });
    }

    getJourneysByTransport(transport) {
        return this.listOfJourneys.filter((journey) => {
            return journey.modeOfTransport === transport;
        });
    }

    getJourneysByMinDistance(distance) {
        return this.listOfJourneys.filter((journey) => {
            return journey.distanceInMiles >= distance;
        })
    }

    calculateTotalDistanceTravelled() {
        const journeysDistance = this.listOfJourneys.map((journey) => journey.distanceInMiles);

        const total = journeysDistance.reduce((runningTotal, number) => {
            return runningTotal + number;
        });
        return total;
    }

    getUniqueModesOfTransport() {
        
        const modesOfTransport = this.listOfJourneys.map (journey => journey.modeOfTransport);
        
        const uniqueModesOfTransport = modesOfTransport.filter ((name,index) => {
            return modesOfTransport.indexOf(name) === index;
        })

        return uniqueModesOfTransport;

    }

}

module.exports = Traveller;