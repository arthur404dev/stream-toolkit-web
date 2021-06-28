import { ChatHorizontal, ChatVertical, Landing } from '../../pages'
import { PATH_CHAT_HORIZONTAL, PATH_CHAT_VERTICAL, PATH_LANDING } from './paths'

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

export const LANDING = {
  component: Landing,
  path: PATH_LANDING,
  isProtected: false,
}

const routes = [CHAT_HORIZONTAL, CHAT_VERTICAL, LANDING]

export default routes
