module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['OojYh6VINqZIPUuIj3te6g==', '8NJLhVV3J71OPJYrpz1E8A==', 'iXyrDNunNtrIHtjIS6dfVw==', 'kA5Xr1hhrXBUsCH3HOPD9A==']),
  },
});
