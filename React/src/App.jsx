import Header from "./components/Header"
import AddForm from "./components/AddForm"
import ListTodos from "./components/ListTodos"
import Footer from "./components/Footer"
import Button from "./components/Button"

// importer un hook le usestate
import { useState } from "react"

function App() {

  const handleClick = () => console.log("Supprimer tous les todos");
  const handleFilter = () => console.log("Filtrer tous les todos");
  const toggleShowForm = () => {
    console.log("click");
    setShowAddTodo(
      (state) => !state
    )
  }
  const handleDeleteTodo = (id) => {

    console.log(`Suppresion du todo n° ` + id);

    setTodos(
      (state) => state.filter(todo => todo.id != id)
    );

  }

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Anniversaire de mariage',
      date: '12/09/1991',
      reminder: true
    },
    {
      id: 2,
      text: 'вынести мусор',
      date: 'Aujourd\'hui',
      reminder: false
    }
  ]);

  const [showAddTodo, setShowAddTodo] = useState(true);

  const toggleReminder = (id) => {

    setTodos(
      state => state.map(
        todo => todo.id == id ? {...todo, reminder : !todo.reminder} : todo
      )
    );

  }

  // je retourne toujours un élément parent (soit une div
  // soit <> </>)
  // React.fragment
  return (
    <div className="container">

      <Header onclickpropFromApp={toggleShowForm} />

      {
        showAddTodo && <AddForm />
      }
      
      <ListTodos onDblClickFromApp={toggleReminder} listTodos={todos} onclickFromApp={handleDeleteTodo} />
      <Button onclickProp={handleClick} text="Supprimer" color="green" />
      <Button onclickProp={handleFilter} text="Reminder" color="orange" />
      <Footer />

    </div>
  )


}

export default App