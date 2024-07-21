import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import ProtectedRoute from '../routes/ProtectedRoute'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import Tickets from '../pages/Tickets'
import Projects from '../pages/Projects'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
