
import Form from "./components/form"
import "@radix-ui/themes/styles.css";
import TableView from "./components/tableView";


const App = () => {
  return (
      <main className="flex justify-center items-center flex-col">
        <div className="h-screen flex justify-center items-center">
          <Form />
        </div>
        <div>
          <TableView />
        </div>
      </main>    
  )
}

export default App