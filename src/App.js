import './App.css';
import { Header } from './components/header';
import { Body } from './components/body';
import { HeroImage } from './components/heroImage/HeroImage';

function App() {
  return (
    <div className="App flex items-center flex-col">
      <Header />
      <HeroImage />
      <Body />
    </div>
  );
}

export default App;
