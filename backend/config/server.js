module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array(['APP_KEYS']), // ['myKeyA', 'myKeyB']
    //keys: env('APP_KEYS', 'defaultKeyA,defaultKeyB').split(','),
  },
  url: env('STRAPI_URL'),
});
