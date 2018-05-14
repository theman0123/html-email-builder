import electronOauth2 from 'electron-oauth2';

//https://www.google.com/m8/feeds/	//read&write access to contacts

//AIzaSyD2Afc-EHekx4KgnjJ1Cuhd1DxOqNbElQQ //api_key

//under "Other Client test"

const config = {
    clientId: '86405562588-voudc4tknc4cv9423ll79bhhgebps734.apps.googleusercontent.com',
    clientSecret: '9vdtJDGOF4udVA6FlqP587Ku',
    authorizationUrl: 'https://www.google.com/m8/feeds/contacts/default/full',
    tokenUrl: 'https://www.google.com/m8/feeds/contacts/default/full',
    useBasicAuthorizationHeader: false,
    redirectUri: 'http://localhost'
};

const options = {
    scope: 'https://www.google.com/m8/feeds/',
    accessType: 'ACCESS_TYPE'
  };

const windowParams = {
  alwaysOnTop: true,
  autoHideMenuBar: true,
  webPreferences: {
      nodeIntegration: false
  }
}

const googleContacts = electronOauth2(config, windowParams);
console.log('ready')
const contactsApi = googleContacts.getAccessToken(options)
  .then(token => {
  console.log('contacts api', token)
    // use your token.access_token

    myApiOauth.refreshToken(token.refresh_token)
      .then(newToken => {
        //use your new token
      });
  });
export default contactsApi;
//
//const clientID = 86405562588-voudc4tknc4cv9423ll79bhhgebps734.apps.googleusercontent.com;
//const clientSecret = 9vdtJDGOF4udVA6FlqP587Ku;