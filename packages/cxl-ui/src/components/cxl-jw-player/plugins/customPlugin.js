(() => {
  // sampleScript plugin script (callback)
  function initPlugin(playerInstance, pluginConfig, pluginDiv) {
    pluginConfig.sampleFunction();
    console.log('from plugin: config name', pluginConfig.name);
  }

  const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;

  // registerPlugin()
  registerPlugin('customPlugin', '8.0', initPlugin);
})();
