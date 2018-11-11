<template>
  <div class="row row-bottom">
    <div
      class="selected-item col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3"
    >
      <div class="row">
        <div class="col s1 demo-selected-icon">
          <i v-html="ico" class="material-icons"></i>
        </div>
        <div class="tooltip col s10">
          <input
            :value="str"
            @click="copy"
            ref="input"
            readonly
            type="text"
            class="col s12"
          />
          <span class="tooltiptext">{{ copy_text }}</span>
        </div>
        <button @click="close" type="button" class="btn-flat -close">
          <i class="material-icons">close</i>
        </button>
      </div>
      <div class="keywords-wrapper">
        <span v-for="(k, i) in value.keywords" :key="i" class="keywords"
          >"{{ k }}"</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Icon } from '../icon-interface';

@Component
export default class NameComponent extends Vue {
  @Prop({
    type: Object
  })
  value: Icon | any;

  show_copyed = false;

  get copy_text() {
    return this.show_copyed
      ? `Copied:\n ${this.str}`
      : 'Click and copy\nto clipboard';
  }

  get str() {
    return `<i class="material-icons">${this.value.ligature}</i>`;
  }

  get ico() {
    return '&#x' + this.value.codepoint;
  }

  copy() {
    (this.$refs.input as HTMLInputElement).blur();
    this.$nextTick(() => {
      (this.$refs.input as HTMLInputElement).select();
      document.execCommand('copy');
    });

    this.show_copyed = true;

    setTimeout(() => {
      this.show_copyed = false;
    }, 3000);
  }

  close() {
    this.$emit('input', {});
  }
}
</script>

<style lang="scss">
.keywords-wrapper {
  min-height: 3rem;
}
.keywords {
  padding: 0rem 0.4rem 0 0;
  opacity: 0.6;
}
.row .selected-item .demo-selected-icon {
  padding-top: 1rem;
}
.-close {
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
}
.row-bottom {
  margin-bottom: 0 !important;
}
.selected-item {
  position: relative;
  background-color: #fff;
  z-index: 99;
  padding: 2rem 1rem;
  box-shadow: 0px -1px 1px 0px rgba(1, 1, 1, 0.54);
  min-height: 6rem;
  input[type='text'] {
    color: rgb(30, 124, 198) !important;
  }
}
.tooltip {
  position: relative;
  display: inline-block;
  input[type='text'] {
    cursor: pointer;
  }
}
.tooltip .tooltiptext {
  white-space: pre;
  visibility: hidden;
  min-width: 10rem;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
