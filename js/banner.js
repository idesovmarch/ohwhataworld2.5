

configObj = {
  text: 'Hello! This site is currently undergoing maintenence and updates. Information listed may be temporarily incomplete or outdated.\nMore Updates to come.',
  bannerURL: 'https://www.ohwhataworld.net',
  selectedBackgroundColor: '#6a7d70',
  selectedTextColor: '#ddd5b6',
  bannerHeight: '72px',
  fontSize: '15px',
};
function createBanner(obj, pageSimulator) {
  var swBannerLink = obj.bannerURL;
  var swBannerTarget = '_blank';
  var swBannerText = obj.text;
  var body = document.body;
  var swBanner = document.createElement('a');
  var centerDiv = document.createElement('div');
  var text = document.createElement('span');
  swBanner.href = swBannerLink;
  swBanner.target = swBannerTarget;
  swBanner.style.display = 'flex';
  swBanner.style.justifyContent = 'center';
  swBanner.style.alignItems = 'center';
  swBanner.style.width = '100%';
  swBanner.style.minHeight = '48px';
  swBanner.style.maxHeight = '100px';
  swBanner.style.paddingTop = '8px';
  swBanner.style.paddingBottom = '8px';
  swBanner.style.marginTop = '75px';
  swBanner.style.lineHeight = '18px';
  swBanner.style.textAlign = 'center';
  swBanner.style.textDecoration = 'none';
  swBanner.style.height = obj.bannerHeight;
  swBanner.style.fontSize = obj.fontSize;
  text.innerHTML = swBannerText;
  swBanner.style.backgroundColor = obj.selectedBackgroundColor;
  swBanner.style.color = obj.selectedTextColor;
  swBanner.id = 'sw-banner';
  swBanner.classList.add('sw-banner');
  centerDiv.classList.add('center');
  centerDiv.append(text);
  swBanner.append(centerDiv);
  if (!pageSimulator) {
    body.insertBefore(swBanner, body.firstChild);
  } else {
    pageSimulator.insertBefore(swBanner, pageSimulator.firstChild);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  createBanner(configObj, null);
});
