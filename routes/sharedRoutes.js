const nextRoutes = require('next-routes');
const sharedRoutes = module.exports = nextRoutes();

sharedRoutes.add({ name: 'video', pattern: '/video', page: 'video' });
sharedRoutes.add({ name: 'about', pattern: '/about', page: 'about' });