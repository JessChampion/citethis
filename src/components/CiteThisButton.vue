<template>
  <button @click="onClick"
          :aria-pressed="[active]">
    CITE
  </button>
</template>

<script>
  export default {
    name: 'CiteThisButton',
    props: {
      toggle: {
        required: true,
        type: Function
      },
      active: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      onBodyClick() {
        this.toggle();
        document.body.removeEventListener('mouseup', this.onBodyClick);
        this.$el.parentElement.removeEventListener('mouseup', this.onClickInsideParent);
      },
      onClick() {
        this.toggle();
        document.body.addEventListener('mouseup', this.onBodyClick);
        this.$el.parentElement.addEventListener('mouseup', this.onClickInsideParent);
      },
      onClickInsideParent(event) {
        event.stopPropagation();
      }
    }
  };
</script>
