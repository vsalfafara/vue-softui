<template>
    <nav class="neo">
        <router-link to="/vue-softui/button">Buttons</router-link>
        <router-link to="/vue-softui/list">List</router-link>
        <router-link to="/vue-softui/card">Card</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
    $dark: rgb(82, 82, 82);

    nav {
        box-sizing: border-box;
        display: inline-flex;
        position: fixed;
        top: 0;
        left: 0;
        margin: 2em;
        z-index: 999;
        border-radius: 1em;

        a {
            padding: 1em 1.5em;
            color: $dark;
            
            &:first-child {
                border-top-left-radius: 1em;
                border-bottom-left-radius: 1em;
            }

            &:last-child {
                border-top-right-radius: 1em;
                border-bottom-right-radius: 1em;
            }
        }
    }
</style>