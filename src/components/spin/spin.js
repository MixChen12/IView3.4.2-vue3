import { plantRenderPara } from '../../../utils/gogocodeTransfer'
import { $children } from '../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
import Spin from './spin.vue'

import { transferIndex, transferIncrease } from '../../utils/transfer-queue'

function handleGetIndex() {
  transferIncrease()
  return transferIndex
}

const genContainer = () => {
  return document.createElement('div')
}

let tIndex = handleGetIndex()

Spin.newInstance = (properties) => {
  const _props = Object.assign(properties || {}, {
    fix: true,
    fullscreen: true,
    size: 'large'
  })

  const container = genContainer()
  container.className = 'ivu-spin-fullscreen ivu-spin-fullscreen-wrapper'
  container.style.zIndex = 2010 + tIndex
  document.body.appendChild(container)
  const vnode = Vue.h(Spin, _props)
  Vue.render(vnode, container)

  const spin = vnode.component.data

  return {
    show() {
      spin.visible = true
      tIndex = handleGetIndex()
    },
    remove(cb) {
      spin.visible = false
      setTimeout(function () {
        // spin.$parent.$destroy()
        if (
          document.getElementsByClassName('ivu-spin-fullscreen')[0] !==
          undefined
        ) {
          document.body.removeChild(
            document.getElementsByClassName('ivu-spin-fullscreen')[0]
          )
        }
        cb()
      }, 500)
    },
    component: spin,
  }
}

export default Spin
