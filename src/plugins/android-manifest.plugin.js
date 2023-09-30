const {withAndroidManifest} = require('@expo/config-plugins');

const supportedApps = ['geo', 'waze'];
const mapAppIntents = supportedApps.map((app) => {
  return {
    action: {
      $: {'android:name': 'android.intent.action.VIEW'},
    },
    data: {
      $: {'android:scheme': app},
    },
  };
});

module.exports = function androidManifestPlugin(config) {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults.manifest;
    const existingIntent = androidManifest.queries[0].intent;

    androidManifest.queries[0].intent = existingIntent.concat(mapAppIntents);

    return config;
  });
};