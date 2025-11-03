import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header';
import AboutMe from './components/Home/AboutMe';
import RotatingText from './components/Home/RotatingText';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';
import WorkExperience from './components/WorkExperience/WorkExperience';
import JPIPage from './components/JPI Page/JPIPage';
import ProjectsPage from './components/Projects/ProjectsPage';
import JPIProjectPage from './components/Projects/JPIProjectPage';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import CloudProjectPage from './components/Projects/CloudProjectPage';
import ContactPage from './components/Contact/ContactPage';
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
            <AboutMe />
            <ProjectSection />
            <WorkExperience />
            <Footer />
          </>
          } />
          <Route path="/projects" element={
            <>
            <NavigationBar />
            <ProjectsGrid />
            <Footer />
          </>
          } />
          <Route path="/projects/e-invoicing" element={
            <>
            <NavigationBar />
            <ProjectsPage />
            <Footer />
          </>
          } />
          <Route path="/projects/cloud-project" element={
            <>
            <NavigationBar />
            <CloudProjectPage />
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
          <Route path="/jpi-project" element={
            <>
            <NavigationBar />
            <JPIProjectPage />
            <Footer />
          </>
          } />
          <Route path="/contact" element={
            <>
            <NavigationBar />
            <ContactPage />
            <Footer />
          </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
