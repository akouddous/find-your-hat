const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    playGame() {
        let y = 0;
        let x = 0;
        this.print()

        while (this._field[y][x] === pathCharacter || this._field[y][x] === fieldCharacter) {
            const input = prompt('Enter a direction (u, d, l, r): ');
            
            if (input === 'u') {
                if (y===0) {
                    console.log('Out of bounds!')
                } else {
                    y -=1
                }
            } else if (input === 'd') {
                if (y >= this._field.length) {
                    console.log('Out of bounds!')
                } else {
                    y +=1
                }
            } else if (input === 'l') {
                if (x === 0) {
                    console.log('Out of bounds!')
                } else {
                    x -=1
                }
            } else if (input === 'r') {
                if (x >= this._field.length) {
                    console.log('Out of bounds!')
                } else {
                    x +=1
                }
            }
            if (this._field[y][x] === fieldCharacter) {
                this._field[y][x] = pathCharacter;
                this.print()
            } else if (this._field[y][x] === hole) {
                console.log('You fell into a hole!');
            } else if (this._field[y][x] === hat) {
                console.log('You win!')
                this.print()
            }
        }
    }


    print() {
        for (let row of this._field) {
            console.log(row.join(''))
        }
    }
}

const myField = new Field([ ['*', '░', 'O'], ['░', 'O', '░'], ['░', '^', '░']])

myField.playGame()