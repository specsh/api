module.exports = {
  appId: 'myAppId',

  appName: 'myAppName',

  masterKey: 'myMasterKey',

  cloud: './cloud/index.js',

  databaseURI: 'mongodb://localhost:27017/parse',

  collectionPrefix: 'APS',

  publicServerURL: 'http://localhost:1337',

  maxUploadSize: '20mb',

  // cloud: '/home/myApp/cloud/main.js',

  port: 1337,

  serverURL: 'http://localhost:1337',

  allowClientClassCreation: true,

  enableAnonymousUsers: true,

  // Email
  verifyUserEmails: true,

  // in seconds (2 hours = 7200 seconds)
  emailVerifyTokenValidityDuration: 2 * 60 * 60,

  preventLoginWithUnverifiedEmail: false,

  verbose: 1,

  jsonLogs: 1,

  emailAdapter: {
    module: 'parse-server-nodemailer-adapter',
    options: {
      fromAddress: 'parse@example.com',
      transportURI: 'smtps://user%40gmail.com:pass@smtp.gmail.com'
    }
  },

  // See: https://github.com/ParsePlatform/parse-server/wiki/Push
  /*
  push: {
      android: {
          // The Sender ID of GCM
          senderId: '',
          // The Server API Key of GCM
          apiKey: ''
      },                     /
      ios: {
          // The filename of private key and certificate in PFX or PKCS12 format from disk
          pfx: '',
          // optional password to your p12
          passphrase: '',
          // If not using the .p12 format, the path to the certificate PEM to load from disk
          cert: '',
          // If not using the .p12 format, the path to the private key PEM to load from disk
          key: '',
          // The bundle identifier associate with your app
          bundleId: '',
          // Specifies which environment to connect to: Production (if true) or Sandbox
          production: false
      }
  },
  */

  // https://github.com/ParsePlatform/parse-server/wiki/Parse-LiveQuery
  liveQuery: {
    classNames: ['Test', 'TestAgain']
  }

  // oauth: {}

  // facebookAppIds: []

  // mountPath: '/parse'

  // filesAdapter:
}
