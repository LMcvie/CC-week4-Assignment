;
const Journey = require('../journey.js');

describe('Journey', () => {
    let journey1;
    let journey2;
    
    beforeEach(() => {
        
        journey1 = new Journey('Edinburgh','Glasgow','Bus',46.8);
        journey2 = new Journey('Aberdeen', 'Dundee','Train',66.5);

    });

    test('does journey have a start location', () => {

        expect(journey1.startLocation).toBe('Edinburgh');
    });

    test ('does journey have an end location', () => {
        
        expect(journey1.endLocation).toBe('Glasgow');
    });

    test ('does the journey have a mode of transport', () => {
        
        expect(journey2.modeOfTransport).toBe('Train');
    });

    test ('what is the distance of the journey', () => {

        expect (journey2.distanceInMiles).toBe(66.5);
    });

    

});