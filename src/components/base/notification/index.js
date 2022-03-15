import Notification from './notification.vue'
import * as Vue from 'vue'

const genContainer = () => {
  return document.createElement('div')
}

Notification.newInstance = (properties) => {
  const _props = properties || {}

  const container = genContainer()
  document.body.appendChild(container)
  const vnode = Vue.h(Notification, _props)
  Vue.render(vnode, container)

  const notification = vnode.component.proxy

  return {
    notice(noticeProps) {
      notification.add(noticeProps)
    },
    remove(name) {
      notification.close(name)
    },
    component: notification,
    destroy(element) {
      notification.closeAll()
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(element)[0])
      }, 500)
    },
  }
}

export default Notification
