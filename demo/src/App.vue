<template>
  <div id="app">
    <div class="navbar-fixed"><nav-component v-model="filter" /></div>
    <div class="section">
      <div class="row">
        <table-list-component
          v-model="icon"
          :input="filter"
          class="col s12 m10 offset-m1"
        />
      </div>
    </div>
    <!-- /section -->
    <transition name="slide">
      <selected-item
        v-if="icon && icon.id"
        v-model="icon"
        class="slide-form bottom-fix"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import tableListComponent from './components/table-list-component.vue';
import navComponent from './components/nav-component.vue';
import selectedItem from './components/selected-item.vue';
import { Icon } from './icon-interface';

@Component({
  components: {
    'table-list-component': tableListComponent,
    'nav-component': navComponent,
    'selected-item': selectedItem
  }
})
export default class App extends Vue {
  filter: string = '';
  icon: Icon | null = null;

  mounted() {
    this.$on('input', ev => {
      debugger;
    });
  }
}
</script>

<style lang="scss">
@import './assets/iconfont/material-icons.css';
@import './assets/materialize/css/materialize.scss';

// animation
.slide-form {
  transform-origin: bottom;
  transition: transform 0.4s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
.bottom-fix {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
