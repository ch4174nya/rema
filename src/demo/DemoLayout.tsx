import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Building2, LayoutDashboard, MessageSquare, Calendar, BarChart3, LogOut, User, Menu, X } from 'lucide-react';

export default function DemoLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEarlyAccessModal, setShowEarlyAccessModal] = useState(false);

  useEffect(() => {
    // Show the modal after 4 seconds initially
    const initialTimer = setTimeout(() => {
      setShowEarlyAccessModal(true);
    }, 4000);

    // Clear the timer when component unmounts
    return () => clearTimeout(initialTimer);
  }, []);
  
  // Set up a timer to reshow the modal when it's closed
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    // If modal is closed, set a timer to reopen it after 6 seconds
    if (!showEarlyAccessModal) {
      timer = setTimeout(() => {
        setShowEarlyAccessModal(true);
      }, 6000);
    }
    
    // Clear the timer when component unmounts or modal state changes
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showEarlyAccessModal]);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Early Access Modal */}
      {showEarlyAccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowEarlyAccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <Building2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access to REMA</h3>
              <p className="text-gray-600 mb-6">Be among the first to experience our revolutionary real estate management assistant.</p>
              <button 
                onClick={() => {
                  window.open('https://forms.gle/vpC1xCP61Mex54dE8', '_blank');
                  setShowEarlyAccessModal(false);
                }}
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center"
              >
                Apply for Early Access
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
        fixed md:static 
        w-64 h-full 
        bg-white border-r 
        z-30 
        transition-transform duration-300 ease-in-out
        flex flex-col
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">REMA</span>
          </div>
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2 flex-grow overflow-y-auto">
          <Link
            to="/demo"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/demo/listings"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/listings')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <Building2 className="h-5 w-5 mr-3" />
            Property Listings
          </Link>
          <Link
            to="/demo/chat"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/chat')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <MessageSquare className="h-5 w-5 mr-3" />
            WhatsApp Chat
          </Link>
          <Link
            to="/demo/calendar"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/calendar')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <Calendar className="h-5 w-5 mr-3" />
            Calendar
          </Link>
          <Link
            to="/demo/analytics"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/analytics')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <BarChart3 className="h-5 w-5 mr-3" />
            Analytics
          </Link>
          <Link
            to="/demo/profile"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/profile')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <User className="h-5 w-5 mr-3" />
            Profile
          </Link>
        </nav>
        <div className="w-full p-4 border-t bg-white mt-auto">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            onClick={() => sidebarOpen && setSidebarOpen(false)}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Exit Demo
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header with Menu Button */}
        <div className="md:hidden flex items-center p-4 border-b bg-white">
          <button 
            className="text-gray-600 hover:text-gray-900 mr-4"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <Building2 className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-lg font-bold text-gray-900">REMA</span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}