import * as numberHelper from './number-helpers';

describe('Tests for number helper', () => {
    
    test('should create numbers with correct length', () => {
        expect(numberHelper.generateNumberArray(1).length).toBe(1);
        expect(numberHelper.generateNumberArray(2).length).toBe(2);
        expect(numberHelper.generateNumberArray(3).length).toBe(3);
        expect(numberHelper.generateNumberArray(4).length).toBe(4);
        expect(numberHelper.generateNumberArray(5).length).toBe(5);
        expect(numberHelper.generateNumberArray(6).length).toBe(6);
        expect(numberHelper.generateNumberArray(7).length).toBe(7);
        expect(numberHelper.generateNumberArray(8).length).toBe(8);
        expect(numberHelper.generateNumberArray(9).length).toBe(9);
    });

    test('should create unique numbers', () => {
        expect(isUnique(numberHelper.generateNumberArray(5))).toBeTruthy();
        expect(isUnique(numberHelper.generateNumberArray(6))).toBeTruthy();
        expect(isUnique(numberHelper.generateNumberArray(7))).toBeTruthy();
        expect(isUnique([1,1,1])).toBeFalsy();
    });
});

function isUnique(number: number[]) {
    let isUnique = true;
    let i = 0;
    while (i < number.length && isUnique) {
        if (number.indexOf(number[i]) >= 0) {
            isUnique = false;
        }
        i++;
    }
    return isUnique;
}