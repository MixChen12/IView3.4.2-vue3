<template>
  <div>
    <Transfer
      :data="data3"
      :target-keys="targetKeys3"
      :list-style="listStyle"
      :render-format="render3"
      :operations="['To left', 'To right']"
      filterable
      @on-change="handleChange3"
    >
      <div :style="{ float: 'right', margin: '5px' }">
        <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>
      </div>
    </Transfer>
    <Transfer
      :data="data4"
      :target-keys="targetKeys4"
      :render-format="render4"
      @on-change="handleChange4">
    </Transfer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data3: this.getMockData(),
      targetKeys3: this.getTargetKeys(),
      listStyle: {
        width: '250px',
        height: '300px',
      },
      data4: this.getMockData(),
      targetKeys4: this.getTargetKeys()
    }
  },
  methods: {
    getMockData() {
      let mockData = []
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i,
          disabled: Math.random() * 3 < 1,
        })
      }
      return mockData
    },
    getTargetKeys() {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map((item) => item.key)
    },
    handleChange3(newTargetKeys) {
      this.targetKeys3 = newTargetKeys
    },
    render3(item) {
      return item.label + ' - ' + item.description
    },
    reloadMockData() {
      this.data3 = this.getMockData()
      this.targetKeys3 = this.getTargetKeys()
    },
    handleChange4 (newTargetKeys) {
      this.targetKeys4 = newTargetKeys;
    },
    render4 (item) {
      return item.label + ' - ' + item.description;
    }
  },
}
</script>
