<template>
  <div>
    <Rate v-model:value="value"></Rate>
    <Rate allow-half v-model:value="valueHalf"></Rate>
    <Rate clearable v-model:value="valueClear"></Rate>
    <Rate clearable allow-half v-model:value="valueClearHalf"></Rate>
    <Rate allow-half show-text v-model:value="characterValue" character="好" />
    <Rate allow-half v-model:value="cv" icon="ios-heart" />
    <!--<Rate show-text v-model="valueText"></Rate>-->
    <!--<Rate show-text allow-half v-model="valueCustomText">-->
    <!--<span style="color: #f5a623">{{ valueCustomText }}</span>-->
    <!--</Rate>-->
    <!--<Rate disabled  allow-half v-model="valueDisabled"></Rate>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      valueHalf: 2.5,
      valueText: 3,
      valueCustomText: 4.0,
      valueDisabled: 2.4,
      valueClear: 1,
      valueClearHalf: 1.5,
      characterValue: 2.5,
      cv: 3.5,
    }
  },
}
</script>
