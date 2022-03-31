<template>
  <tr
    :class="rowClasses(row._index)"
    :draggable="draggable"
    @dragstart="onDrag($event, row._index)"
    @drop="onDrop($event, row._index)"
    @dragover="allowDrop($event)"
    @mouseenter.stop="handleMouseIn(row._index)"
    @mouseleave.stop="handleMouseOut(row._index)"
    @click="clickCurrentRow(row._index)"
    @dblclick.stop="dblclickCurrentRow(row._index)"
    v-if="draggable"
  >
    <slot></slot>
  </tr>
  <tr :class="rowClasses(row._index)" v-else>
    <slot></slot>
  </tr>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  props: {
    row: Object,
    prefixCls: String,
    draggable: Boolean,
  },
  computed: {
    objData() {
      return this.$parent.objData
    },
  },
  methods: {
    onDrag(e, index) {
      e.dataTransfer.setData('index', index)
    },
    onDrop(e, index) {
      const dragIndex = e.dataTransfer.getData('index')
      this.$parent.$parent.dragAndDrop(dragIndex, index)
      e.preventDefault()
    },
    allowDrop(e) {
      e.preventDefault()
    },
    rowClasses(_index) {
      return [
        `${this.prefixCls}-row`,
        this.rowClsName(_index),
        {
          [`${this.prefixCls}-row-highlight`]:
            this.objData[_index] && this.objData[_index]._isHighlight,
          [`${this.prefixCls}-row-hover`]:
            this.objData[_index] && this.objData[_index]._isHover,
        },
      ]
    },
    rowClsName(_index) {
      return this.$parent.$parent.rowClassName(this.objData[_index], _index)
    },
    handleMouseIn(index) {
      $emit(this, 'mouseenter', index)
    },
    handleMouseOut(index) {
      $emit(this, 'mouseleave', index)
    },
    clickCurrentRow(index) {
      $emit(this, 'click', index)
    },
    dblclickCurrentRow(index) {
      $emit(this, 'dblclick', index)
    },
  },
  emits: [ 'mouseenter', 'mouseleave', 'click', 'dblclick' ]
}
</script>
