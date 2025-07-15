import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Vault from './components/Vault';
import FitBot from './components/FitBot';
import ProtectedRoute from './components/ProtectedRoute';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/vault"
  element={
    <ProtectedRoute>
      <Vault />
    </ProtectedRoute>
  }
/>

<Route
  path="/planner"
  element={
    <ProtectedRoute>
      <Planner />
    </ProtectedRoute>
  }
/>

<Route
  path="/fitbot"
  element={
    <ProtectedRoute>
      <FitBot />
    </ProtectedRoute>
  }
/>

<Route
  path="/olq"
  element={
    <ProtectedRoute>
      <OLQ />
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
