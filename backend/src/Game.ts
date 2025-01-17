import { WebSocket } from "ws";
import { Chess } from "chess.js"

export class Game {

    public player1 : WebSocket;
    public player2 : WebSocket;
    public board : Chess;
    private startTime : Date;

    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
    }

    makeMove(socket : WebSocket, move : {
        from : string; 
        to : string
    }) {
        // Validation here --> Is the user valid --> Is the move valid --> Update the board --> Push the move --> Send the updated board to both of the user
        if(this.board.moves.length % 2 === 0 && socket !== this.player1){
            return;
        }
        if(this.board.moves.length % 2 === 1 && socket !== this.player2){
            return;
        }

        try{
            this.board.move(move);
        } catch(e){
            return;
        }
    }
}