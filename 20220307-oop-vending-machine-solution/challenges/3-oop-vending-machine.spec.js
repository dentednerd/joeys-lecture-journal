const { VendingMachine } = require('./3-oop-vending-machine');

describe('VendingMachine', () => {
  let testMachine;
  const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
  beforeEach(() => {
    testMachine = new VendingMachine();
  });
  it('creates a new instance of a VendingMachine', () => {
    expect(testMachine instanceof VendingMachine).toBe(true);
  });
  describe('with the following properties:', () => {
    it('credit - which starts at 0', () => {
      expect(testMachine.credit).toEqual(0);
    });
    it('stock  - representing the rows of items in the machine (A/B/C)', () => {
      const expected = {
        A: {},
        B: {},
        C: {},
      };
      const actual = testMachine.stock;
      expect(actual).toEqual(expected);
    });
  });
  describe('and the following methods:', () => {
    it('addStock  - adds new stock to the machine in the correct position', () => {
      testMachine.addStock(marsBars, 'A');
      const expected = {
        A: { name: 'marsBar', price: '50p', quantity: 6 },
        B: {},
        C: {},
      };
      const actual = testMachine.stock;
      expect(actual).toEqual(expected);
    });
    it('addCredit - updates the machine credit', () => {
      expect(testMachine.credit).toBe(0);
      testMachine.addCredit(50);
      expect(testMachine.credit).toBe(50);
      testMachine.addCredit(10);
      expect(testMachine.credit).toBe(60);
    });
    it('purchaseItem - decreases the stock quantity if there is sufficient credit and returns stock name', () => {
      testMachine.addStock(marsBars, 'A');
      testMachine.addCredit(30);
      let expected = 'Insufficient credit!';
      let actual = testMachine.purchaseItem('A');
      expect(actual).toEqual(expected);
      testMachine.addCredit(30);
      expected = 'marsBar';
      actual = testMachine.purchaseItem('A');
      expect(actual).toEqual(expected);
      let expectedStock = {
        A: { name: 'marsBar', price: '50p', quantity: 5 },
        B: {},
        C: {},
      };
      let actualStock = testMachine.stock;
      expect(actualStock).toEqual(expectedStock);
      expect(testMachine.credit).toBe(10);
    });
  });
});
