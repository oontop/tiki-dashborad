import React, { useState, useEffect } from 'react';
import { Config, getConfig, updateConfig } from "../services/";


const Settings = () => {
    const [serverUri, setServerUri] = useState('');

    useEffect(() => {
        // Load the server URI from the config object in local storage when the component mounts
        const config: Config = getConfig();
        if (config.baseUrl) {
            setServerUri(config.baseUrl);
        }
    }, []);

    const handleUriChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newUri = event.target.value;
        setServerUri(newUri);
    };

    const handleSaveConfig = () => {
        // Update the config object and save it to local storage
        const config: Config = getConfig();
        config.baseUrl = serverUri;
        updateConfig(config);
    };

    return (
        <div>
            <div>Settings</div>
            <div>
                <label htmlFor="serverUri">Server URI:</label>
                <input
                    type="text"
                    id="serverUri"
                    value={serverUri}
                    onChange={handleUriChange}
                />
            </div>
            <button onClick={handleSaveConfig}>Save Config</button>
        </div>
    );
};

export default Settings;
