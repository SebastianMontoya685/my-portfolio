import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header.tsx';
import ProjectSection from './components/ProjectSection/ProjectSection.tsx';
import Footer from './components/Footer/Footer.tsx';
import NavigationBar from './components/navigation/NavigationBar.tsx';
import WorkExperience from './components/WorkExperience/WorkExperience.tsx';
import JPIPage from './components/JPI Page/JPIPage.tsx';
import ProjectsPage from './components/Projects/ProjectsPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScrollSection from './components/WorkExperience2/ScrollSection';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <NavigationBar />
            <Header />
            <ProjectSection />
            <WorkExperience />
            <Footer />
          </>
          } />
          <Route path="/projects" element={
            <>
            <NavigationBar />
            <ProjectsPage />
            <Footer />
          </>
          } />
          <Route path="/jpi" element={
            <>
            <NavigationBar />
            <JPIPage />
            <Footer />
          </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
