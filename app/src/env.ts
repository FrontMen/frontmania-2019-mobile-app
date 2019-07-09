import Constants from 'expo-constants';

interface Environment {
  endpoint: string;
}

function extractHostname(url: string): string {
  return url.match(/:\/\/(.*):.*/)[1];
}

const definitions: Record<string, Environment> = {
  development: {
    endpoint: `http://${extractHostname(Constants.linkingUrl)}:1337`,
  },
  production: {
    endpoint: 'http://api.frontmania.com',
  },
};

const envName = __DEV__ ? 'development' : 'production';

export const env: Environment = definitions[envName];
