import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  xTurn: boolean = true;
  squares!: any[];
  winner!: any;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xTurn = true;
    this.winner = null;
  }

  get currPlayer() {
    return this.xTurn ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.currPlayer);
      this.xTurn = !this.xTurn;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(
        this.squares[a] == this.squares[b] && 
        this.squares[a] == this.squares[c] && 
        this.squares[a]
        
      ){
        console.log(this.squares[a])
        return this.squares[a] 
      }
    }
    return null;
  }
}
