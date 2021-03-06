import {
  ChatHorizontal,
  ChatManager,
  ChatVertical,
  ChatPinned,
  Landing,
  Redirect,
  Authenticate,
  Stats,
} from "../../pages"
import {
  PATH_AUTH_REDIRECT,
  PATH_CHAT_HORIZONTAL,
  PATH_CHAT_MANAGER,
  PATH_CHAT_VERTICAL,
  PATH_AUTH_AUTHENTICATE,
  PATH_LANDING,
  PATH_STATS,
  PATH_CHAT_PINNED,
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
  isProtected: false,
}
export const CHAT_PINNED = {
  component: ChatPinned,
  path: PATH_CHAT_PINNED,
  isProtected: false,
}
export const STATS = {
  component: Stats,
  path: PATH_STATS,
  isProtected: false,
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
  CHAT_PINNED,
  AUTH_REDIRECT,
  AUTH_AUTHENTICATE,
  STATS,
  LANDING,
]

export default routes
