/* eslint-disable @typescript-eslint/no-explicit-any */
// import FingerprintJS from '@fingerprintjs/fingerprintjs';
// import UAParser from 'ua-parser-js';

// // DEVICE INFOS
// export const fingerprint = () => {
//   const fpPromise = FingerprintJS.load();

//   return (async () => {
//     // Get the visitor identifier when you need it.
//     const fp = await fpPromise;
//     const result = await fp.get();
//     return result.visitorId;
//   })();
// };

export const getLanguage = () => {
  if (navigator.languages !== undefined) return navigator.languages[0]
  return navigator.language
}

// export const browserInfo = () => {
//   const parser = new UAParser();
//   return parser.getResult();
// };

// TOKENS ACTIONS
export const getToken = () => {
  const token = localStorage.getItem('@CRM:token')

  if (token) {
    return token
  }

  return null
}

export const clearStorage = () => {
  localStorage.clear()
  sessionStorage.clear()
}

export const getAuthenticated = () => {
  const authenticated = localStorage.getItem('@CRM:authenticated')

  if (authenticated) {
    return authenticated === 'true'
  }

  return false
}

export const getCurrentLocation = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
  return position as any
}
