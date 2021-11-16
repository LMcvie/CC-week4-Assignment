const Traveller = require('../traveller.js');
const Journey = require ('../journey.js');
describe('Traveller', () => {
    let traveller;
    let journey1;
    let journey2;
    let journey3;
    let journey4;
    let journeys;
   
    
    beforeEach(() => {

        journey1 = new Journey('Edinburgh','Glasgow','Bus',46.8);
        journey2 = new Journey('Aberdeen', 'Dundee','Train',66.5);
        journey3 = new Journey('Glasgow', 'Dundee', 'Train', 80.8);
        journey4 = new Journey('Edinburgh', 'Newcastle', 'Airplane', 120.2);
        journeys = [journey1,journey2,journey3,journey4];
        traveller = new Traveller(journeys);
    });

   
    test ('traveller holds a collection of journeys', () =>
    {
    
        expect(traveller.listOfJourneys).toBe(journeys);
    });

    test('should be able to get the journeys start locations', () => {
        const expected = [
          journey1.startLocation,
          journey2.startLocation,
          journey3.startLocation,
          journey4.startLocation
        ];
        expect(traveller.getJourneyStartLocations()).toEqual(expected);
      });
    
      test('should be able to get the journeys end locations', () => {
        const expected = [
          journey1.endLocation,
          journey2.endLocation,
          journey3.endLocation,
          journey4.endLocation
        ];
        expect(traveller.getJourneyEndLocations()).toEqual(expected);
      });
    
      test('should be able to get journeys by transport', () => {
        const expected = [
          journey2,
          journey3
        ];
        expect(traveller.getJourneysByTransport('Train')).toEqual(expected);
      });
    
      test('should be able to get journeys over a certain distance', () => {
        const expected = [
          journey3,
          journey4
        ];
        expect(traveller.getJourneysByMinDistance(70)).toEqual(expected)
      });
    
      test('should be able to calculate total distance travelled', () => {
        expect(traveller.calculateTotalDistanceTravelled()).toBe(314.3);
      });
    
      test('should be able to get a unique list of the modes of transport', () => {
        const expected = [ 'Bus', 'Train', 'Airplane'];
        expect(traveller.getUniqueModesOfTransport()).toEqual(expected);
      });
});