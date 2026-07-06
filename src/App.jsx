import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Places from './Pages/Places.jsx';
import Details from './Pages/Details.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import SubscriptionPage from './Pages/Subscription.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Route>
    </Routes>
  );
}