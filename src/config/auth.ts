export default {
  jwt: {
    secret: process.env.APP_SECRET || 'super-secret-key',
    expiresIn: '1d',
  },
};
