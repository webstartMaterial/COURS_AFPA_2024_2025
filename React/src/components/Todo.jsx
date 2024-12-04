
  import React from 'react'
  import { FaTimes } from 'react-icons/fa'

  function Todo(props) {
    return (
      <div className='todo' onDoubleClick={ () => props.onDblClickFromList(props.todoAAfficher.id) }>
          <h3> {props.todoAAfficher.text}
            <FaTimes 
              onClick={() => props.onclickFromList(props.todoAAfficher.id)} 
              style={{color:"red"}}/>
          </h3>
          <p>{props.todoAAfficher.date}</p>
      </div>
    )
  }

  export default Todo