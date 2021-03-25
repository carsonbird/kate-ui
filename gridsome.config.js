// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: 'gridsome-plugin-pwa',
    options: {
      // Service Worker Options
      disableServiceWorker: false,
      serviceWorkerPath: 'service-worker.js',
      cachedFileTypes: 'vue,js,json,css,html,png,jpg,jpeg,svg,gif',
      disableTemplatedUrls: false, // Optional

      // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
      manifestPath: 'manifest.json',
      title: 'Kate',
      startUrl: '/',
      display: 'standalone',
      statusBarStyle: 'default',
      themeColor: '#666600',
      backgroundColor: '#ffffff',
      icon: '',
      shortName: 'Kate', // Optional
      description: 'Communikate!', // Optional
      categories: ['education'], // Optional
      lang: 'en-US', // Optional
      dir: 'auto', // Optional
    }
  }],
  siteUrl: "https://carsonbird.github.io",
  pathPrefix: "/kate-ui"
}