import * as Keychain from 'react-native-keychain';

export const saveSecureToken = async (key: string, token: string) => {
  try {
    await Keychain.setGenericPassword(key, token, {service: key});
  } catch (error) {
    console.error('Keychain save error:', error);
  }
};

export const getSecureToken = async (key: string) => {
  try {
    const credentials = await Keychain.getGenericPassword({service: key});
    if (credentials) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Keychain get error:', error);
    return null;
  }
};
