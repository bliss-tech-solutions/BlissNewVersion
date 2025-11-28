import './App.css'
import HomeRoutes from './Components/HomePageComponents/HomeRoutes'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Branding from './Components/OtherComponents/Branding/Branding'
import OurStory from './Components/OtherComponents/AboutUs/OurStory/OurStory'
import Footer from './Components/OtherComponents/Footer/Footer'
import ContactBottomCommon from './Components/OtherComponents/ContactBottomCommon/ContactBottomCommon'
import OurWorkGrid from './Components/OtherComponents/OurWorkGrid/OurWorkGrid'
import usePageTitle from './hooks/usePageTitle'
import Career from './Components/OtherComponents/Career/Career'
import CareerPosition from './Components/OtherComponents/Career/CareerPosition'
import { AnimatePresence, motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="PageTransitionWrapper"
      initial={{ opacity: 0, y: 25, scale: 0.98, rotateX: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.98,
        rotateX: -6,
        transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] }
      }}
      style={{ transformOrigin: '50% 0%', perspective: 1200 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  usePageTitle(); // Automatically update page title on route change
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomeRoutes /></PageTransition>} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          <Route path="/branding" element={<PageTransition><Branding /></PageTransition>} />
          <Route path="/ourstory" element={<PageTransition><OurStory /></PageTransition>} />
          <Route path="/ourwork" element={<PageTransition><OurWorkGrid /></PageTransition>} />
          <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
          <Route path="/career/:positionName" element={<PageTransition><CareerPosition /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <ContactBottomCommon />
      <Footer />
    </>
  )
}

export default App
