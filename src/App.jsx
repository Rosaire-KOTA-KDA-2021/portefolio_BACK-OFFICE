import "./App.style.scss";

import Navbar from "./components/shared/navbar/Navbar";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};

export default App;
