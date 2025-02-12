import React, { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import MonthlyDisplay from '../components/MonthlyDisplay';
import Settings from './Settings';

const Dashboard: React.FC = () => {
   
    const [showSettings, setShowSettings] = useState(false);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
             <SignedIn>
                
                <button 
                    className="mt-4 p-2 bg-blue-500 text-white rounded" 
                    onClick={() => setShowSettings(!showSettings)}
                >
                    Toggle Settings
                </button>
                {showSettings ? (
                    <div className="mt-4 p-4 bg-white rounded shadow">
                        {/* Settings content goes here */}
                        <Settings />
                    </div>
                ) : <MonthlyDisplay />}
                {/* show paitents data in the future  */}
             </SignedIn>
             <SignedOut>
                    <div className="oontop-extension-auth-button">
                        Please Login to view this page
                    </div>
             </SignedOut>
        </div>
    );
}

export default Dashboard;
