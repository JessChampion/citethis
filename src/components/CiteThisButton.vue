<template>
  <button @click="onClick"
          :aria-pressed="[active]"
  >
    {{ label }}
  </button>
</template>

<script>
  export default {
    name: 'CiteThisButton',

    props: {
      active: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        required: true
      },
      toggle: {
        required: true,
        type: Function
      }
    },

    methods: {
      close() {
        this.toggle();
        document.body.removeEventListener('click', this.onBodyClick);
        this.$el.parentElement.removeEventListener('click', this.onClickInsideParent);
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
      },

      open() {
        this.toggle();
        document.body.addEventListener('click', this.onBodyClick);
        this.$el.parentElement.addEventListener('click', this.onClickInsideParent);
      }
    }
  };
</script>
