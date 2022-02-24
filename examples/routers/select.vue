<template>
  <div style="margin: 100px">
    <!-- <Select
      v-model="model1"
      filterable
      style="width: 200px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Select
      v-model="model10"
      filterable
      :max-tag-count="2"
      multiple
      style="width: 400px"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Select
      v-model="model10"
      filterable
      :max-tag-count="2"
      multiple
      style="width: 400px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <br /><br />

    <Select v-model="model1" style="width: 200px">
      <template v-slot:prefix>
        <Icon type="ios-alarm" color="red" />
      </template>
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Select v-model="model1" style="width: 200px">
      <template v-slot:prefix>
        <Avatar
          src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          size="small"
        />
      </template>
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Select
      v-model="model10"
      :max-tag-count="3"
      :max-tag-placeholder="more"
      multiple
      style="width: 400px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <br /><br />

    <Select
      size="small"
      v-model="model1"
      style="width: 200px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Select
      size="small"
      v-model="model10"
      multiple
      style="width: 400px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <br /><br />

    <Select
      size="large"
      v-model="model1"
      style="width: 200px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select> -->

    <!-- <Select
      size="large"
      v-model="model10"
      multiple
      style="width: 400px"
      prefix="ios-albums"
    >
      <Option v-for="item in cityList" :value="item.value" :key="item.value" :disabled="item.disabled">{{
        item.label
      }}</Option>
    </Select> -->

    <Select v-model="model7" style="width:200px">
        <OptionGroup label="Hot Cities">
            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
        <OptionGroup label="Other Cities">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
    </Select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
          disabled: true
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
      model1: '',
      model10: [],
      cityList1: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      cityList2: [
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model7: ''
    }
  },
  methods: {
    more(num) {
      return 'more' + num
    },
  },
}
</script>
