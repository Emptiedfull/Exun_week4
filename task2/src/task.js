import './App.css';

function Task(props){
    const style = {
        listStyleType: 'none',
       
        
        border: '1px solid black',
        fontSize: '3vh',
    };

    return(
        <l1 style={style}> 
            <input type="checkbox"></input>
            {props.Value}
        </l1>
    )

}

export default Task