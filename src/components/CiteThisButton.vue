<template>
  <button @click="onClick"
          :aria-pressed="[active]"
  >
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
      close() {
        this.toggle();
        document.body.removeEventListener('mouseup', this.onBodyClick);
        this.$el.parentElement.removeEventListener('mouseup', this.onClickInsideParent);
      },
      open() {
        this.toggle();
        document.body.addEventListener('mouseup', this.onBodyClick);
        this.$el.parentElement.addEventListener('mouseup', this.onClickInsideParent);
      },
      onBodyClick() {
        this.close();
      },
      onClick() {
        if (this.active) {
          this.close();
          return;
        }
        this.open();
      },
      onClickInsideParent(event) {
        // prevent closing flyout on click inside component
        event.stopPropagation();
      }
    }
  };
</script>
