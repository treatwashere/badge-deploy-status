export function getBaseUrl() {
  if (typeof window === 'undefined') {
    return 'https://badge-deploy-status.vercel.app';
  }

  return window.location.origin;
}
