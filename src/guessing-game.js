class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    } // этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания

    guess() {
        return Math.round((this.max + this.min)/2);
    } // этот метод возвращает кандидата решения (вы делаете предположение на основе диапазона и предыдущих предположений)

    lower() {
        this.max = this.guess();
    } // этот метод вызывается, если предыдущий вызов guess()возвращаемого числа больше, чем ответ

    greater() {
        this.min = this.guess();
    } // этот метод вызывается, если предыдущий вызов guess()возвращаемого номера меньше, чем ответ
}

module.exports = GuessingGame;
