import './App.css';
import { AppProvider } from './context';
import RouterPage from './RouterPage';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RouterPage/>
      </AppProvider>
    </div>
  );
}

export default App;
