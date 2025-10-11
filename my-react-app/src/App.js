import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header.tsx';
import ProjectSection from './components/ProjectSection/ProjectSection.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
