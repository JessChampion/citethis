<template>
  <div>
    <select title="Format"
            :value="value"
            @input="updateValue($event.target.value)">
      <option v-for="format in formats"
              :key="format"
              :value="format">
        {{ format }}
      </option>
    </select>
    <div>Selected: {{ value }}</div>
  </div>
</template>
<script>
  export default {
    name: 'CiteThisFormatSelector',
    props: {
      value: {
        type: String,
        default: ''
      },
      formats: {
        type: Object,
        default: null
      },
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
