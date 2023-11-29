export default function getNoun(number) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return 'минут';
    }
    n %= 10;
    if (n === 1) {
        return 'минута';
    }
    if (n >= 2 && n <= 4) {
        return 'минуты';
    }
    return 'минут';
}
