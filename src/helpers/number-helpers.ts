export function generateNumberArray(length: number): number[] {
    const firstDigit = Math.floor((Math.random() * 9) + 1);
    // if length = 3 => factor = 100
    let number = Array(length).fill(undefined);
    let i = 0;
    number[i] = firstDigit;
    while (i < length - 1) {
        i++
        let random;
        do {
            random = Math.floor((Math.random()) * 9);
        } while(number.indexOf(random) >= 0);
        number[i] = random;
        
    }
    return number;
}