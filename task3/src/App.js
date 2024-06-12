
import './App.css';
import { useState } from 'react';

function Board({squares,xisnext,onplay}) {
 

  const calculateWinner = (squares)=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    
    return null
  }

  const onClick = (i)=>{

    
    if(squares[i] || calculateWinner(squares)) return 
    
    const newSquares = [...squares]
    newSquares[i] = xisnext ? 'X' : 'O'
    onplay(newSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xisnext ? 'X' : 'O');
  }
  
  

  return (
    <div className="App">
      <h1>{status}</h1>
      <div className='row'> 
        <Square value={squares[0]} onClick={()=>onClick(0)}/>
        <Square value={squares[1]} onClick={()=>onClick(1)}/>
        <Square value={squares[2]} onClick={()=>onClick(2)}/>
      </div>
      <div className='row'> 
        <Square value={squares[3]} onClick={()=>onClick(3)} />
        <Square value={squares[4]} onClick={()=>onClick(4)}/>
        <Square value={squares[5]} onClick={()=>onClick(5)}/>
      </div><div className='row'> 
        <Square value={squares[6]} onClick={()=>onClick(6)}/>
        <Square value={squares[7]} onClick={()=>onClick(7)}/>
        <Square value={squares[8]} onClick={()=>onClick(8)}/>
      </div>
    </div>


  );
}

const Square = ({value,onClick})=>{
  return(
    <button className='square' onClick={onClick}>
      {value}
    </button>
  )
}
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [xisnext, setXisNext] = useState(true)
  const [currentmove, setCurrentMove] = useState(0)
  const currentSquares = history[currentmove];

  
  const onplay=(nextSquares)=>{
      const nextHistory = [...history.slice(0, currentmove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      setXisNext(!xisnext);
  
    }

  const jumpto = (nextmove)=>{
    setCurrentMove(nextmove)
    setXisNext(nextmove%2===0)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onplay={onplay} xisnext={xisnext}/>
      </div>
      <div className='history'>
        <ul>
          {history.map((squares,index)=>{
            return <li key={index} onClick={()=>jumpto(index)}>{(()=>{
              if(index===0){
                return 'Start'
              }
              return "go to turn " + index
            })()}</li>
          })}
        </ul>

      </div>
    </div>
  );
}
export default Game;
