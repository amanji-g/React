import { createContext,useContext } from "react";
export const Todocontext = createContext({
    todo: [
        {
            id: 1,
            todo:"Todo msg",
            completed: false
        },{},{}
    ],
   addTodo: (todo) => {},
   updatedTodo: (id,todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
})

export const useTodo = ()=>{
    return useContext(Todocontext)
}

export  const TodoProvider = Todocontext.Provider
