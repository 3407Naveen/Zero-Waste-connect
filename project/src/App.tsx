import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FoodDonations from './components/FoodDonations';
import MapPickup from './components/MapPickup';
import Messages from './components/Messages';
import Impact from './components/Impact';
import FoodSafety from './components/FoodSafety';
import Community from './components/Community';
import Profile from './components/Profile';
import FloatingAddButton from './components/FloatingAddButton';

type Section = 'dashboard' | 'donations' | 'map' | 'messages' | 'impact' | 'safety' | 'community' | 'profile';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'donations':
        return <FoodDonations />;
      case 'map':
        return <MapPickup />;
      case 'messages':
        return <Messages />;
      case 'impact':
        return <Impact />;
      case 'safety':
        return <FoodSafety />;
      case 'community':
        return <Community />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        {renderSection()}
      </main>

      <FloatingAddButton onClick={() => setActiveSection('donations')} />

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}
    </div>
  );
}

export default App;