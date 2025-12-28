import './App.css';
import Header from './components/Home/Header';
import AboutMe from './components/Home/AboutMe';
// import RotatingText from './components/Home/RotatingText';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';
import WorkExperience from './components/WorkExperience/WorkExperience';
import OtherExperience from './components/OtherExperience/OtherExperience';
import JPISimplePage from './components/JPI Page/JPISimplePage';
import JPIPage from './components/JPI Page/JPIPage'; // Original JPI page (kept for future use)
// import ProjectsPage from './components/Projects/ProjectsPage'; // Original e-invoicing page with folder view
import EInvoicingPage from './components/Projects/EInvoicingPage';
// import JPIProjectPage from './components/Projects/JPIProjectPage';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import CloudProjectPage from './components/Projects/CloudProjectPage';
import AirtableClonePage from './components/Projects/AirtableClonePage';
import LinkedProjectPage from './components/Projects/LinkedProjectPage';
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
            <EInvoicingPage />
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
          <Route path="/projects/airtable-clone" element={
            <>
            <NavigationBar />
            <AirtableClonePage />
            <Footer />
          </>
          } />
          <Route path="/projects/linked" element={
            <>
            <NavigationBar />
            <LinkedProjectPage />
            <Footer />
          </>
          } />
          <Route path="/jpi" element={
            <>
            <NavigationBar />
            <JPISimplePage />
            <Footer />
          </>
          } />
          <Route path="/jpi-project" element={
            <>
            <NavigationBar />
            <JPISimplePage />
            <Footer />
          </>
          } />
          {/* Original JPI page with timeline - kept for future use */}
          <Route path="/jpi-full" element={
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
