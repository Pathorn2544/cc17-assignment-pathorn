


function TodoPage(){

    function deleate(p){
        p.remove
    }
    
   return(


    <div className="work">
        <header>
            <h1>My Todo</h1>
            <input id = 'yours' placeholder="new task"></input>
        </header>
        <div className="list">

            <div> </div>
            <button onClick={deleate}>x</button>

        </div>
    </div>

    

   )
}

export default TodoPage