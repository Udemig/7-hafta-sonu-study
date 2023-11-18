import Form from "./components/Form";
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";

function App() {
  return (
<div>
  {/*Çeşitler */}
  <Scoops/>
  {/*Toppings */}
  <Toppings/>
  {/*Form Alanı */}
  <Form/>
</div>
  );
}

export default App;
