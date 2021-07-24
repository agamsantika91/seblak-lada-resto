import '../../src/scripts/view/components/resto-info';
import '../../src/scripts/view/components/resto-review';
import '../../src/scripts/view/components/resto-details';
import dummyData from '../helper/dummy-data';

describe('Resto Detail Element', () => {
  let restoDetailElement;

  beforeEach(() =>{
    document.body.innerHTML = '<resto-details></resto-details>';
    restoDetailElement = document.querySelector('resto-details');
  });

  describe('When resto details data not set yet', () => {
    it('should show skeleton', () => {
      expect(restoDetailElement.querySelector('.skeleton'))
          .toBeTruthy();
    });
  });

  describe('When resto details data is set', () => {
    beforeEach(() => {
      restoDetailElement.details = dummyData.restaurant;
    });

    it('should remove skeleton correctly', () => {
      expect(restoDetailElement.querySelector('.skeleton'))
          .toBeFalsy();
    });

    it('should show restaurants detail content', () => {
      expect(restoDetailElement.querySelector('.description'))
          .toBeTruthy();
      expect(restoDetailElement.querySelector('.info'))
          .toBeTruthy();
      expect(restoDetailElement.querySelector('.main-info'))
          .toBeTruthy();
      expect(restoDetailElement.querySelector('resto-review'))
          .toBeTruthy();
    });
  });
});

