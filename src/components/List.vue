<template>
    <div class="container">
        <h3>List</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam?</li>
        </ul>
        <h3>Neo List</h3>
        <ul class="neo">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'List',
}
</script>

<style lang="scss" scoped>

    $white: #fff;
    $shadow: rgb(218, 218, 218);
    $box-shadow: 
        -5px -5px 10px 0 $white,
        5px 5px 10px 0 $shadow;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            padding: 1em;
            transition: box-shadow .2s;

            &:hover {
                box-shadow: $box-shadow;
            }
        }
    }

</style>