import { ChatHorizontal, ChatManager, ChatVertical, Landing } from "../../pages"
import {
  PATH_CHAT_HORIZONTAL,
  PATH_CHAT_MANAGER,
  PATH_CHAT_VERTICAL,
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
// Common Path
export const LANDING = {
  component: Landing,
  path: PATH_LANDING,
  isProtected: false,
}

const routes = [CHAT_HORIZONTAL, CHAT_VERTICAL, CHAT_MANAGER, LANDING]

export default routes
