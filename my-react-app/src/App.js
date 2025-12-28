import './App.css';
import Header from './components/Home/Header';
import AboutMe from './components/Home/AboutMe';
// import RotatingText from './components/Home/RotatingText';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';
import WorkExperience from './components/WorkExperience/WorkExperience';
import OtherExperience from './components/OtherExperience/OtherExperience';
import JPIPage from './components/JPI Page/JPIPage';
import ProjectsPage from './components/Projects/ProjectsPage';
// import JPIProjectPage from './components/Projects/JPIProjectPage';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import CloudProjectPage from './components/Projects/CloudProjectPage';
import ContactPage from './components/Contact/ContactPage';
import TPRAPage from './components/JPI Page/TPRAPage';
import UNSWPage from './components/JPI Page/UNSWPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
// import ScrollSection from './components/WorkExperience2/ScrollSection';
function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <NavigationBar />
            <Header />
            <ProjectSection />
            <WorkExperience />
            <OtherExperience />
            <AboutMe />
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
            <JPIPage />
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
          <Route path="/tpra" element={
            <>
            <NavigationBar />
            <TPRAPage />
            <Footer />
          </>
          } />
          <Route path="/unsw" element={
            <>
            <NavigationBar />
            <UNSWPage />
            <Footer />
          </>
          } />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
