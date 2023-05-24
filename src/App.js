import './App.css';
import ContentContainer from "./ContentContainer";
import "./NavigationBar.css"
import NavigationBar from "./NavigationBar";

function App() {
  return (
      <div className="appContainer">
          <NavigationBar/>
          <ContentContainer/>
      </div>
  );
}

export default App // Enhanced component
