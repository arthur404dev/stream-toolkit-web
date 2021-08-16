// Base Paths
const basePaths = {
  overlays: "/overlay",
  auth: "/auth",
}
// Common Paths
export const PATH_LANDING = "/"
// Custom Paths
// -> Auth Paths
export const PATH_AUTH_AUTHENTICATE = `${basePaths.auth}/authenticate`
export const PATH_AUTH_REDIRECT = `${basePaths.auth}/redirect`
// -> Overlay Paths
export const PATH_CHAT_VERTICAL = `${basePaths.overlays}/chat/vertical`
export const PATH_CHAT_HORIZONTAL = `${basePaths.overlays}/chat/horizontal`
export const PATH_CHAT_MANAGER = `${basePaths.overlays}/chat/manager`
