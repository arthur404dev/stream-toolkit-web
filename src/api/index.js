import { platformIds, socketFactory, sourceIds } from "./websocket"

export const socket = {
  client: socketFactory(),
  sources: sourceIds,
  platforms: platformIds,
}
