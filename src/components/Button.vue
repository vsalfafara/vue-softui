<template>
    <div class="container">
        <h3>Normal Buttons</h3>
        <div>
            <button>Normal</button>
            <button>Normal</button>
            <button>Normal</button>
            <button>Normal</button>
            <button>Normal</button>
            <button>Normal</button>
        </div>
        <h3>Buttons With Default Shadow</h3>
        <div>
            <button class="btn-neo">Neo Init</button>
            <button class="btn-neo">Neo Init</button>
            <button class="btn-neo">Neo Init</button>
            <button class="btn-neo">Neo Init</button>
            <button class="btn-neo">Neo Init</button>
            <button class="btn-neo">Neo Init</button>
        </div>
        <h3>Color Neo Buttons</h3>
        <div>
            <button class="info">Neo Init</button>
            <button class="success">Neo Init</button>
            <button class="warning">Neo Init</button>
            <button class="danger">Neo Init</button>
        </div>
        <h3>Color Neo Buttons With Default Shadow</h3>
        <div>
            <button class="btn-neo info">Neo Init</button>
            <button class="btn-neo success">Neo Init</button>
            <button class="btn-neo warning">Neo Init</button>
            <button class="btn-neo danger">Neo Init</button>
        </div>
        <h3>Icon Button</h3>
        <div>
            <button class="btn-icon"><i class="material-icons">add</i></button>
            <button class="btn-icon"><i class="material-icons">wifi</i></button>
            <button class="btn-icon"><i class="material-icons">attach_file</i></button>
            <button class="btn-icon"><i class="material-icons">cached</i></button>
        </div>
        <h3>Icon Button With Default Shadow</h3>
        <div>
            <button class="btn-neo btn-icon"><i class="material-icons">add</i></button>
            <button class="btn-neo btn-icon"><i class="material-icons">wifi</i></button>
            <button class="btn-neo btn-icon"><i class="material-icons">attach_file</i></button>
            <button class="btn-neo btn-icon"><i class="material-icons">cached</i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style lang="scss" scoped>
    button {
        margin: 1em;
    }
</style>