<template>
  <li :class="[prefixCls + '-wrap']" v-show="!hidden">
    <div :class="[prefixCls + '-title']">{{ label }}</div>
    <ul>
      <li :class="[prefixCls]" ref="options"><slot></slot></li>
    </ul>
  </li>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
const prefixCls = 'ivu-select-group'

export default {
  name: 'OptionGroup',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      hidden: false, // for search
    }
  },
  methods: {
    queryChange() {
      this.$nextTick(() => {
        const options = this.$refs.options.querySelectorAll('.ivu-select-item')
        let hasVisibleOption = false
        for (let i = 0; i < options.length; i++) {
          if (options[i].style.display !== 'none') {
            hasVisibleOption = true
            break
          }
        }
        this.hidden = !hasVisibleOption
      })
    },
  },
  mounted() {
    $on(this, 'on-query-change', () => {
      this.queryChange()
      return true
    })
  },
}
</script>
