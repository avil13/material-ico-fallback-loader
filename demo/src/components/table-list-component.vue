<template>
  <table class="responsive-table icon-grig">
    <thead>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Ligature</th>
        <th>Codepoint</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(icon, i) in grid"
        :key="i"
        @click="selectItem(icon);"
        :class="{ active: value === icon }"
      >
        <td><i v-html="ico(icon)" class="material-icons"></i></td>
        <td>
          <span class="truncate">{{ icon.name }}</span>
        </td>
        <td>
          <span class="truncate">{{ icon.ligature }}</span>
        </td>
        <td>
          <span class="truncate">{{ icon.codepoint }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Icon } from './../icon-interface';
const grid_icons = require('../../../src/grid.json');

@Component
export default class TableListComponent extends Vue {
  @Prop({
    type: Object
  })
  value: Icon | any;

  @Prop({
    type: String,
    default: ''
  })
  input: any | string;

  get search() {
    return this.input.toLowerCase();
  }

  get grid() {
    return (grid_icons.icons as Icon[]).filter(v => {
      const name = v.name.toLowerCase();
      return (
        name.indexOf(this.search) > -1 ||
        v.keywords.some(keyword => keyword.indexOf(this.search) > -1)
      );
    });
  }

  selectItem(icon: Icon) {
    this.$emit('input', icon);
  }

  ico(icon: Icon) {
    return '&#x' + icon.codepoint;
  }
}
</script>

<style lang="scss">
table {
  thead tr:nth-child(1) th {
    background: white;
    position: sticky;
    top: 64px;
    z-index: 10;
  }
}
.icon-grig {
  tr {
    cursor: pointer;
    transition: all 0.45s ease-in-out;
    &:hover {
      background-color: rgba(14, 134, 232, 0.4);
    }
    &.active {
      background-color: rgba(14, 134, 232, 0.9);
    }
  }
}
</style>
