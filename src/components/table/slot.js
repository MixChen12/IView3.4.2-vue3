import * as Vue from 'vue'
export default function render(_props, _context) {
  const ctx = {
    ..._context,
    props: _props,
    data: _context.attr,
    children: _context.slots,
  }
  return Vue.h(
    'div',
    ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index,
    })
  )
}
