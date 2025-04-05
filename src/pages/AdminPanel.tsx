import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Home, 
  Settings, 
  ChartBar, 
  Bot, 
  Menu, 
  X, 
  Bell,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BusterBot from '@/components/BusterBot';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Get current page from URL pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/admin/fraud-detector')) return 'fraud-detector';
    if (path.includes('/admin/reports')) return 'reports';
    if (path.includes('/admin/settings')) return 'settings';
    return 'dashboard';
  };
  
  const currentPage = getCurrentPage();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
        } fixed md:relative inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-fraudbuster-darkBlue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FB</span>
            </div>
            <span className="font-bold text-lg text-fraudbuster-darkBlue">FraudBuster</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleSidebar}
          >
            <X size={18} />
          </Button>
        </div>

        {/* Sidebar Content */}
        <nav className="flex-1 pt-4 px-2 space-y-1 overflow-y-auto">
          <Link to="/admin">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-left ${
                currentPage === 'dashboard' ? 'bg-fraudbuster-blue/20 text-fraudbuster-darkBlue' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/fraud-detector">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-left ${
                currentPage === 'fraud-detector' ? 'bg-fraudbuster-blue/20 text-fraudbuster-darkBlue' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Bot className="mr-3 h-5 w-5" />
              Fraud Detector
            </Button>
          </Link>
          <Link to="/admin/reports">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-left ${
                currentPage === 'reports' ? 'bg-fraudbuster-blue/20 text-fraudbuster-darkBlue' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChartBar className="mr-3 h-5 w-5" />
              Reports
            </Button>
          </Link>
          <Link to="/admin/settings">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-left ${
                currentPage === 'settings' ? 'bg-fraudbuster-blue/20 text-fraudbuster-darkBlue' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Button>
          </Link>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-fraudbuster-purple/30 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Settings size={16} />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-4 md:hidden" 
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </Button>
            <h1 className="text-xl font-semibold text-gray-800">
              {currentPage === 'dashboard' && 'Dashboard'}
              {currentPage === 'fraud-detector' && 'Fraud Detector'}
              {currentPage === 'reports' && 'Reports'}
              {currentPage === 'settings' && 'Settings'}
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {/* Dashboard */}
          {currentPage === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-fraudbuster-darkBlue mb-2">Welcome back, John!</h2>
                    <p className="text-gray-600">Here's what's happening with your fraud detection today.</p>
                  </div>
                  <div className="hidden sm:block">
                    <BusterBot emotion="happy" size="md" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Fraud Alerts</p>
                      <h3 className="text-3xl font-bold text-fraudbuster-darkBlue mt-2">24</h3>
                      <p className="text-sm text-green-600 flex items-center mt-2">
                        <span>↓ 12% from last week</span>
                      </p>
                    </div>
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Bell className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Scans Today</p>
                      <h3 className="text-3xl font-bold text-fraudbuster-darkBlue mt-2">142</h3>
                      <p className="text-sm text-green-600 flex items-center mt-2">
                        <span>↑ 8% from yesterday</span>
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Savings This Month</p>
                      <h3 className="text-3xl font-bold text-fraudbuster-darkBlue mt-2">$12,580</h3>
                      <p className="text-sm text-green-600 flex items-center mt-2">
                        <span>↑ 23% from last month</span>
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <ChartBar className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Transaction #38291 flagged as suspicious</p>
                      <p className="text-xs text-gray-500">Today, 10:23 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <User className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New team member Sarah added</p>
                      <p className="text-xs text-gray-500">Yesterday, 4:45 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <ChartBar className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Monthly fraud report generated</p>
                      <p className="text-xs text-gray-500">Yesterday, 2:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-4">
                      <Bell className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">High-risk alert: Multiple failed login attempts</p>
                      <p className="text-xs text-gray-500">Apr 4, 8:15 AM</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full text-fraudbuster-darkBlue border-fraudbuster-darkBlue/30">
                  View All Activity
                </Button>
              </div>
            </div>
          )}

          {/* Fraud Detector */}
          {currentPage === 'fraud-detector' && <FraudDetector />}
          
          {/* Other pages would be added here, or via Routes/Outlet */}
          {currentPage !== 'dashboard' && currentPage !== 'fraud-detector' && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <BusterBot emotion="thinking" size="lg" className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-fraudbuster-darkBlue mb-2">Coming Soon</h2>
              <p className="text-gray-600">This section is under development and will be available soon.</p>
            </div>
          )}
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// Fraud Detector Component
const FraudDetector = () => {
  const [inputText, setInputText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    
    setAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setResult({
        riskScore: 78,
        confidence: 92,
        flags: [
          { type: 'Suspicious URL', severity: 'high', details: 'Contains phishing indicators' },
          { type: 'Urgent Action Request', severity: 'medium', details: 'Creates false sense of urgency' },
          { type: 'Grammar Issues', severity: 'low', details: 'Multiple spelling errors typical in scams' },
        ],
        explanation: "This message contains several red flags commonly found in phishing attempts. The suspicious URL, urgent tone, and grammar issues are typical tactics used by scammers. The system has high confidence that this is a fraudulent message.",
        sentiment: "Manipulative"
      });
      setAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setInputText('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-fraudbuster-darkBlue mb-4">Fraud Analysis Tool</h2>
        <p className="text-gray-600 mb-4">
          Enter text from emails, messages, or communications to analyze for potential fraud.
        </p>
        
        <div className="mb-4">
          <textarea
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-fraudbuster-blue/50 focus:border-fraudbuster-blue focus:outline-none"
            placeholder="Paste the text you want to analyze here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            onClick={handleAnalyze} 
            disabled={analyzing || !inputText.trim()}
            className="button-primary flex items-center"
          >
            {analyzing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </>
            ) : (
              <>
                <Bot className="mr-2 h-4 w-4" />
                Analyze with BusterBot
              </>
            )}
          </Button>
          
          {result && (
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-fraudbuster-darkBlue">Analysis Results</h2>
            <div className="flex items-center">
              <BusterBot emotion="scanning" size="sm" className="mr-2" />
              <span className="text-sm text-gray-500">Analysis by BusterBot</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Risk Score</p>
              <div className="flex items-baseline mt-1">
                <h3 className="text-2xl font-bold text-red-600">{result.riskScore}%</h3>
                <span className="ml-2 text-xs text-gray-500">High Risk</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Confidence</p>
              <div className="flex items-baseline mt-1">
                <h3 className="text-2xl font-bold text-fraudbuster-darkBlue">{result.confidence}%</h3>
                <span className="ml-2 text-xs text-gray-500">Strong</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Sentiment</p>
              <div className="flex items-baseline mt-1">
                <h3 className="text-2xl font-bold text-orange-500">{result.sentiment}</h3>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm font-medium text-gray-500 mb-2">BusterBot's Explanation</p>
            <p className="text-gray-700">{result.explanation}</p>
          </div>

          {/* Flags Table */}
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Detected Red Flags</p>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flag</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {result.flags.map((flag: any, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{flag.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          flag.severity === 'high' ? 'bg-red-100 text-red-800' : 
                          flag.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {flag.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flag.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
