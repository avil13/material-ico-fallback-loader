<template>
    <nav class="blue darken-1">
        <div class="nav-wrapper">
            <form @submit.prevent="no" autocomplete="off" novalidate>
                <div class="input-field">
                    <input v-model="search" id="search" type="search" required>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i @click="search=''" class="material-icons">close</i>
                </div>
            </form>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavComponent extends Vue {
    @Prop({
        type: String,
        default: ''
    }) value: any | string;

    get search(){
        return this.value;
    }
    set search(v){
        this.$emit('input', v);
        this.value = v;
    }

    no() {}
}
</script>