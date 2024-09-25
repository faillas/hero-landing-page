
function setStoreLinks() {
  const appStoreLink = document.getElementById('app-store-link');
  const googlePlayLink = document.getElementById('google-play-link');
  // Define the store URLs
  const appStoreUrl = 'https://apps.apple.com/us/app/example-app/id123456789';
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.example.app';
  // Update the href attributes with the correct URLs
  appStoreLink.href = appStoreUrl;
  googlePlayLink.href = googlePlayUrl;
}
// Call the function to set the links when the page loads
document.addEventListener('DOMContentLoaded', setStoreLinks);
