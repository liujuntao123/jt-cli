export function init(): void {
  const envSetting = document.getElementsByTagName('body')[0].getAttribute('envSetting');
  try {
    if (!envSetting) {
      return;
    }
    (window as any).envSetting = JSON.parse(envSetting);
  } catch (error) {
    console.log('parse env setting failed');
  }
}

init();
