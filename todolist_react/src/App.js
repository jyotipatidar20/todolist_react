import React,{useState} from 'react';
import './App.css';

export default function App(){
  const [todo,setTodo]=useState("")
  const[allTodos,setAllTodos]=useState([])

return(

    <div>
      <table>
      <h5   style={{marginLeft:"90px",fontSize:"20px",color:"red", fontStyle:"italic"}}>TODOLIST  </h5>
      <input  type="text" placeholder="Enter the  detail"  style={{color:"black",backgroundColor:"lightblue",marginLeft:"20px" }} onChange={(e)=>{
        setTodo(e.target.value)
      }}/>
    <button  style={{color:"black", background:"pink"}} onClick={()=>{
      if (todo.trim().length>0){
      setAllTodos([...allTodos,todo])
      }
    }}>AddData</button>
    {
      allTodos.map((item,index)=>{
        return(
          <center>
          <div>
            <h1  style={{color:"white"}}>{item}</h1>
            <button style={{color:"white",background:"lightsalmon",marginLeft:"20px"}} onClick ={()=>{
              let newdata=[...allTodos]
              newdata.splice(index,1);
              setAllTodos(newdata)
            }}>Delete</button>

            <button  style={{ color:"white",backgroundColor:"lightsalmon" , marginLeft:"5px"}} onClick={()=>{
            const arr = [...allTodos]
            const newarr=prompt("inter the number")
            if  (newarr.trim().length>0){
             arr[index]=newarr


             setAllTodos(arr)
            }

          }
            }>edit</button>
            <button style={{ color:"white",backgroundColor:"lightsalmon" , marginLeft:"5px"}} onClick={()=>{
              let newarr= [...allTodos]
              newarr[index]=<del>{newarr[index]}</del>
              setAllTodos(newarr)

            }
            }>complete</button>

          </div>
          </center>
        )
      })
    }
    </table>
    </div>
  )
}
