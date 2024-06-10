import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/layouts";
import Login from "./pages/login/login";
import TodoList from "./pages/todoList/todoList";
import Register from "./pages/register/register";
import Pluschecklist from "./pages/todoList/components/Pluschecklist";
import Item from "./pages/todoList/components/Item";
import PlusItems from "./pages/todoList/components/PlusItems";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
           <Route path="/"  element={<TodoList/>}></Route>
           <Route path="login" index element={<Login/>}></Route>
           <Route path="register" element={<Register/>}></Route>
           <Route path="plus-checklist/:id" element={<Pluschecklist/>}></Route>
           <Route path="plus-checklist" element={<Pluschecklist/>}></Route>
           <Route path="checklist/:id/item" element={<Item/>}></Route>
           <Route path="checklist/:id/item/plus" element={<PlusItems/>}></Route>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
