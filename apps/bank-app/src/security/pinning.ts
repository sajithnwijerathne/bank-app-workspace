import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

export const setupSSLPinning = async () => {
  try {
    await initializeSslPinning({
      'jsonplaceholder.typicode.com': {
        includeSubdomains: true,
        publicKeyHashes: [
          'mocked-base64-hash-for-jsonplaceholder', // In a real app, extract this from the cert
        ],
      },
    });
    console.log('SSL Pinning configured successfully.');
  } catch (error) {
    console.error('SSL Pinning setup failed:', error);
  }
};
