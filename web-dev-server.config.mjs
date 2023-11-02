export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/demo/',
  watch: true,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  port: 8080,
});
