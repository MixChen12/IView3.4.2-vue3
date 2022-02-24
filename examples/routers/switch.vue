<template>
  <div>
    <i-switch v-model:value="m1" :loading="loading">
      <template v-slot:open>
        <span>开</span>
      </template>
      <template v-slot:close>
        <span>关</span>
      </template>
    </i-switch>
    {{ m1 }}
    <div @click="m1 = !m1">toggle</div>
    <div @click="loading = !loading">loading</div>
    <br /><br />
    <i-switch size="large" loading></i-switch>
    <i-switch></i-switch>
    <i-switch size="small" v-model:value="m1" :loading="loading"></i-switch>
    <br /><br />
    <i-switch>
      <template v-slot:open>
        <span>开</span>
      </template>
      <template v-slot:close>
        <span>关</span>
      </template>
    </i-switch>
    <i-switch>
      <template v-slot:open>
        <Icon type="md-checkmark"></Icon>
      </template>
      <template v-slot:close>
        <Icon type="md-close"></Icon>
      </template>
    </i-switch>
    <br /><br />
    <i-switch size="large">
      <template v-slot:open>
        <span>开启</span>
      </template>
      <template v-slot:close>
        <span>关闭</span>
      </template>
    </i-switch>
    <i-switch size="large" v-model:value="m1" :loading="loading">
      <template v-slot:open>
        <span>ON</span>
      </template>
      <template v-slot:close>
        <span>OFF</span>
      </template>
    </i-switch>
    <br /><br />
    <i-switch :disabled="disabled"></i-switch>
    <Button type="primary" @click="disabled = !disabled"
      >Toggle Disabled</Button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      m1: true,
      disabled: true,
      loading: false,
    }
  },
  methods: {
    change(status) {
      console.log(status)
    },
  },
}
</script>
