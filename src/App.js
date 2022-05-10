import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import List from "./components/List/List";
import items from "./data/items";
import { loadItemsActionCreator } from "./redux/features/projects/projectsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItemsActionCreator(items));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <Header />
      <Info />
      <main className="row py-4">
        <List />
      </main>
      <Form />
    </div>
  );
}

export default App;
