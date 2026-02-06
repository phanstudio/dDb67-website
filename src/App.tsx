import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import DeetsPage from './pages/DeetsPage'
import SubmitPage from './pages/SubmitPage'
import HomePage from './pages/HomePage'
import WalletPage from './pages/WalletPage'

// global context for inputting info
// loading inbtw 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HomePage />} />

        {/* Default route */}
        <Route path="/deets" element={<DeetsPage />} />

        {/* Default route */}
        <Route path="/submit" element={<SubmitPage />} />

        {/* Your current page */}
        <Route path="/task" element={<TaskPage />} />

        {/* Next step */}
        <Route path="/wallet" element={<WalletPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
