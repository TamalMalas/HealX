import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';

// This is the app's "map": each URL path renders one page component.
// Right now there's only one page. As we build later pieces —
// patient portal, partner portal, admin — each gets its own <Route> here.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
