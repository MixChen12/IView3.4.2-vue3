<template>
  <div style="margin: 100px; background: #f8f8f9; padding: 100px">
    <Card title="选项" :padding="0" shadow style="width: 300px">
      <CellGroup @on-click="handleClick">
        <Cell title="标题一" name="a1" label="附属内容" to="/button">
          <template v-slot:extra>
            <Badge :count="10"></Badge>
          </template>
        </Cell>
        <Cell title="标题一" name="a2" label="附属内容" extra="详细信息"></Cell>
        <Cell
          title="标题一"
          name="a3"
          label="附属内容"
          extra="详细信息"
          to="/button"
        ></Cell>
        <Cell title="标题一" name="a4" label="附属内容" selected></Cell>
        <Cell title="标题二">
          <template v-slot:icon>
            <Icon type="trash-a"></Icon>
          </template>
        </Cell>
        <Cell><span style="color: #ff6600">六七十111</span></Cell>
        <Cell title="标题四" selected></Cell>
        <Cell title="标题五"></Cell>
        <Cell title="标题六" disabled></Cell>
        <Cell title="标题七" extra="详细信息" to="/icon"></Cell>
        <Cell title="标题七" extra="详细信息" selected></Cell>
        <Cell title="标题七" label="附属内容" extra="详细信息"></Cell>
        <Cell title="标题八">
          <template v-slot:extra>
            <i-switch v-model:value="switch1"></i-switch>
          </template>
        </Cell>
        <Cell title="标题九" to="/button" target="_blank"></Cell>
      </CellGroup>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: false,
    }
  },
  methods: {
    handleClick(name) {
      console.log(name)
    },
  },
}
</script>
