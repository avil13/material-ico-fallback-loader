<template>
    <table class="responsive-table">
        <thead>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Ligature</th>
                <th>Codepoint</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(icon, i) in grid" :key="i">
                <td><i v-html="ico(icon)" class="material-icons"></i></td>
                <td><span class="truncate">{{ icon.name }}</span></td>
                <td><span class="truncate">{{ icon.ligature }}</span></td>
                <td><span class="truncate">{{ icon.codepoint }}</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const grid_icons = require('../../../src/grid.json');

@Component
export default class TableListComponent extends Vue {
    @Prop({
        type: String,
        default: ''
    }) input: any | string;
    
    get search() {
        return this.input.toLowerCase();
    }
    
    get grid() {
        return (grid_icons.icons as any[]).filter((v) => {
            return (v.name as string).toLowerCase().indexOf(this.search) > -1
        });
    }

    ico(icon: any) {
        return '&#x'+icon.codepoint;
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
</style>
