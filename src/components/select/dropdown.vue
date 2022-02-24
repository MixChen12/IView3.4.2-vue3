<template>
  <div class="ivu-select-dropdown" :class="className" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
// const isServer = window.$vueApp.config.globalProperties.$isServer
const isServer = false
import { getStyle } from '../../utils/assist'
const Popper = isServer
  ? function () {}
  : require('popper.js/dist/umd/popper.js') // eslint-disable-line

import { transferIndex, transferIncrease } from '../../utils/transfer-queue'

export default {
  name: 'Drop',
  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },
    className: {
      type: String,
    },
    transfer: {
      type: Boolean,
    },
  },
  data() {
    return {
      popper: null,
      width: '',
      popperStatus: false,
      tIndex: this.handleGetIndex(),
      styles: {
        minWidth: '0',
        zIndex: '1060',
        width: '0'
      }
    }
  },
  watch: {
    width(val) {
      this.styles['minWidth'] = `${val}px`
    },
    sZIndex(val) {
      this.styles['zIndex'] = val
    }
  },
  computed: {
    sZIndex() {
      return this.transfer ? 1060 + this.tIndex : 0
    }
  },
  methods: {
    update() {
      if (isServer) return
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.update()
          this.popperStatus = true
        })
      } else {
        this.$nextTick(() => {
          // 需要多获取一层$parent
          this.popper = new Popper(this.$parent.$parent.$refs.reference, this.$el, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false,
              },
              preventOverflow: {
                boundariesElement: 'window',
              },
            },
            onCreate: () => {
              this.resetTransformOrigin()
              this.$nextTick(this.popper.update())
            },
            onUpdate: () => {
              this.resetTransformOrigin()
            },
          })
        })
      }
      // set a height for parent is Modal and Select's width is 100%
      // 需要多获取一层$parent
      if (this.$parent.$parent.$options.name === 'iSelect') {
        this.width = parseInt(getStyle(this.$parent.$parent.$el, 'width'))
      }
      this.tIndex = this.handleGetIndex()
    },
    destroy() {
      if (this.popper) {
        setTimeout(() => {
          if (this.popper && !this.popperStatus) {
            this.popper.destroy()
            this.popper = null
          }
          this.popperStatus = false
        }, 300)
      }
    },
    resetTransformOrigin() {
      // 不判断，Select 会报错，不知道为什么
      if (!this.popper) return

      let x_placement = this.popper.popper.getAttribute('x-placement')
      let placementStart = x_placement.split('-')[0]
      let placementEnd = x_placement.split('-')[1]
      const leftOrRight = x_placement === 'left' || x_placement === 'right'
      if (!leftOrRight) {
        this.popper.popper.style.transformOrigin =
          placementStart === 'bottom' ||
          (placementStart !== 'top' && placementEnd === 'start')
            ? 'center top'
            : 'center bottom'
      }
    },
    handleGetIndex() {
      transferIncrease()
      return transferIndex
    },
  },
  created() {
    $on(this, 'on-update-popper', this.update)
    $on(this, 'on-destroy-popper', this.destroy)
  },
  beforeUnmount() {
    if (this.popper) {
      this.popper.destroy()
    }
  },
}
</script>
