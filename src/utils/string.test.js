import { capitalizeFirstLetter } from './string';

describe('capitalizeFirstLetter', () => {
  test('Passed value is valid', () => {
    const value = 'hats';
    const expectedValue = 'Hats';

    const transformedValue = capitalizeFirstLetter(value);
    expect(transformedValue).toBe(expectedValue);
  });

  test('Passed value  is empty string', () => {
    const value = '';
    const expectedValue = '';
    const transformedValue = capitalizeFirstLetter(value);
    expect(transformedValue).toBe(expectedValue);
  });

  test('Passed value is undefined', () => {
    const value = undefined;
    const expectedValue = '';
    const transformedValue = capitalizeFirstLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });

  test('Passed value is object', () => {
    //const person = {name: "Inga"}
    // person.name => turetu buti
    // person => bet gauni taip

    const value = {};
    const expectedValue = '';
    const transformedValue = capitalizeFirstLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });
});
