describe("mock functions", () => {
	test("mock", () => {
		const mockFn = jest.fn();

		mockFn(1);
		mockFn(2, 3);
    mockFn(4,5,6);

		console.log(mockFn.mock.calls);

		// can assert number of calls
		expect(mockFn.mock.calls.length).toBe(2);
	});

  test('mocks with Jest assertions', () => {
    // arrange?
    const mockFn = jest.fn();

    // // act?

    // mockFn();

    // // assert...
    // expect(mockFn).toHaveBeenCalledTimes(1);

    // // act AGAIN?!?
    // mockFn('twice?');

    for (let i = 0; i < 20; i++) {
      mockFn()
    }

    // ...assert AGAIN?!?!?
    expect(mockFn).toHaveBeenCalledTimes(20);
    // expect(mockFn).toHaveBeenLastCalledWith('twice?');
  });

  test.only("mock functions with array methods", () => {
		const mockFn = jest.fn();

		const nums = [1, 2, 3, 4];

    // act
		nums.map(mockFn);

		expect(mockFn).toHaveBeenCalledTimes(3);
		// element, index, array
		expect(mockFn).toHaveBeenCalledWith(1, 0, nums);
    expect(mockFn).toHaveBeenCalledWith(3, 2, nums);
    expect(mockFn).toHaveBeenCalledWith(2, 1, nums);
	});
});
