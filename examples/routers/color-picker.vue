<template>
  <ColorPicker v-model:value="color1" transfer />
</template>

<script>
export default {
  data() {
    return {
      color1: '#19be6b',
      color2: '',
    }
  },
}
</script>
