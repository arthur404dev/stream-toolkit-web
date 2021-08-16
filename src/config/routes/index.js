import {
  ChatHorizontal,
  ChatManager,
  ChatVertical,
  Landing,
  Redirect,
  Authenticate,
} from "../../pages"
import {
  PATH_AUTH_REDIRECT,
  PATH_CHAT_HORIZONTAL,
  PATH_CHAT_MANAGER,
  PATH_CHAT_VERTICAL,
  PATH_AUTH_AUTHENTICATE,
  PATH_LANDING,
} from "./paths"
// Overlay Paths
export const CHAT_HORIZONTAL = {
  component: ChatHorizontal,
  path: PATH_CHAT_HORIZONTAL,
  isProtected: false,
}
export const CHAT_VERTICAL = {
  component: ChatVertical,
  path: PATH_CHAT_VERTICAL,
  isProtected: false,
}
export const CHAT_MANAGER = {
  component: ChatManager,
  path: PATH_CHAT_MANAGER,
  isProtected: true,
}
// Auth Paths
export const AUTH_REDIRECT = {
  component: Redirect,
  path: PATH_AUTH_REDIRECT,
  isProtected: false,
}
export const AUTH_AUTHENTICATE = {
  component: Authenticate,
  path: PATH_AUTH_AUTHENTICATE,
  isProtected: false,
}
// Common Path
export const LANDING = {
  component: Landing,
  path: PATH_LANDING,
  isProtected: false,
}
const routes = [
  CHAT_HORIZONTAL,
  CHAT_VERTICAL,
  CHAT_MANAGER,
  AUTH_REDIRECT,
  AUTH_AUTHENTICATE,
  LANDING,
]

export default routes
