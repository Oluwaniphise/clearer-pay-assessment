import './App.css'
import { Dashboard } from './pages/DashboardLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './pages/PageLayout';
import { Wallet } from './pages/Wallet';
import { Merchants } from './pages/Merchants';
import {Transactions} from './pages/Transactions';
import { Beneficiaries } from './pages/Beneficiaries';
import { Settings } from './pages/Settings';
import { Navigate } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />}  />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/merchants" element={<Merchants />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
