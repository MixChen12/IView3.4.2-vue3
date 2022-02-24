<template>
  <i-select
    ref="select"
    class="ivu-auto-complete"
    :label="label"
    :disabled="disabled"
    :clearable="clearable"
    :placeholder="placeholder"
    :size="size"
    :placement="placement"
    :value="currentValue"
    filterable
    remote
    auto-complete
    :remote-method="remoteMethod"
    @on-change="handleChange"
    :transfer="transfer"
  >
    <template v-slot:input>
      <i-input
        :element-id="elementId"
        ref="input"
        v-model:value="currentValue"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :size="size"
        :icon="inputIcon"
        @on-click="handleClear"
        @on-focus="handleFocus"
        @on-blur="handleBlur"
      ></i-input>
    </template>
    <slot>
      <i-option v-for="item in filteredData" :value="item" :key="item">{{
        item
      }}</i-option>
    </slot>
  </i-select>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import iSelect from '../select/select.vue'
import iOption from '../select/option.vue'
import iInput from '../input/input.vue'
import { oneOf } from '../../utils/assist'
import Emitter from '../../mixins/emitter'

export default {
  name: 'AutoComplete',
  mixins: [Emitter],
  components: { iSelect, iOption, iInput },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: [String, Number],
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default() {
        return !this.$IVIEW || this.$IVIEW.size === ''
          ? 'default'
          : this.$IVIEW.size
      },
    },
    icon: {
      type: String,
    },
    filterMethod: {
      type: [Function, Boolean],
      default: false,
    },
    placement: {
      validator(value) {
        return oneOf(value, ['top', 'bottom'])
      },
      default: 'bottom',
    },
    transfer: {
      type: Boolean,
      default() {
        return this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer
      },
    },
    name: {
      type: String,
    },
    elementId: {
      type: String,
    },
  },
  data() {
    return {
      currentValue: this.value,
      disableEmitChange: false, // for Form reset
    }
  },
  computed: {
    inputIcon() {
      let icon = ''
      if (this.clearable && this.currentValue) {
        icon = 'ios-close'
      } else if (this.icon) {
        icon = this.icon
      }
      return icon
    },
    filteredData() {
      if (this.filterMethod) {
        return this.data.filter((item) =>
          this.filterMethod(this.currentValue, item)
        )
      } else {
        return this.data
      }
    },
  },
  watch: {
    value(val) {
      if (this.currentValue !== val) {
        this.disableEmitChange = true
      }
      this.currentValue = val
    },
    currentValue(val) {
      this.$refs.select.setQuery(val)
      $emit(this, 'update:value', val)
      if (this.disableEmitChange) {
        this.disableEmitChange = false
        return
      }
      $emit(this, 'on-change', val)
      this.dispatch('FormItem', 'on-form-change', val)
    },
  },
  methods: {
    remoteMethod(query) {
      $emit(this, 'on-search', query)
    },
    handleChange(val) {
      if (val === undefined || val === null) return
      this.currentValue = val
      this.$refs.input.blur()
      $emit(this, 'on-select', val)
    },
    handleFocus(event) {
      $emit(this, 'on-focus', event)
    },
    handleBlur(event) {
      $emit(this, 'on-blur', event)
    },
    handleClear() {
      if (!this.clearable) return
      this.currentValue = ''
      this.$refs.select.reset()
      $emit(this, 'on-clear')
    },
  },
  emits: [
    'update:value',
    'on-change',
    'on-search',
    'on-select',
    'on-focus',
    'on-blur',
    'on-clear',
  ],
}
</script>
