<template>
    <div id="app">
        <div class="navbar-fixed">
            <nav-component v-model="filter" />
        </div>

        <div class="section">
            <div class="row">
                <table-list-component :input="filter" class="col s12 m10 offset-m1" />
            </div>
        </div>
        <!-- /section -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import tableListComponent from './components/table-list-component.vue';
import navComponent from './components/nav-component.vue';

@Component({
  components: {
    'table-list-component': tableListComponent,
    'nav-component': navComponent
  },
})
export default class App extends Vue {
    filter: string = ''
}
</script>

<style lang="scss">
@import './assets/iconfont/material-icons.css';
@import './assets/materialize/css/materialize.scss';
</style>
