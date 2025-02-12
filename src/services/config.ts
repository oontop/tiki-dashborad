export interface Config {
  baseUrl: string;
}
  
export const config: Config = {
  // update to service options 
  // baseUrl: 'https://api.oontop.com/api/v1',
  baseUrl: 'http://localhost:6001/api/v1',
};

export const updateConfig = (newConfig: Partial<Config>) => {
  Object.assign(config, newConfig);
};

export function getConfig(): Config {
  return config;
}
  