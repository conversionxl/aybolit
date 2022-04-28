class customPlugin {
  __playerInstance;
  __pluginConfig;
  __pluginDiv;

  constructor(playerInstance, pluginConfig, pluginDiv) {
    this.__playerInstance = playerInstance;
    this.__pluginConfig = pluginConfig;
    this.__pluginDiv = pluginDiv;

    this.__setup();
  }

  __setup() {
    console.log(this.__playerInstance);
  }
}

const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;

registerPlugin('customPlugin', '8.0', customPlugin);
