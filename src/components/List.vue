<template>
    <div class="container">
        <h3>List</h3>
        <ul>
            <li v-for="post in data" :key="post.id">#{{post.id}}: {{post.title}}</li>
        </ul>
        <h3>Neo List</h3>
        <ul class="neo">
            <li v-for="post in data" :key="post.id + 100">#{{post.id}}: {{post.title}}</li>
        </ul>
    </div>
</template>

<script>
import * as axios from 'axios'
export default {
    name: 'List',
    data() {
        return {
            data: null
        }
    },
    mounted() {
        this.posts()
    },
    methods: {
        posts: function() {
            axios.get('http://jsonplaceholder.typicode.com/posts?_start=1&_limit=10',
            {
                headers: {
                'Access-Control-Allow-Origin': '*',
                },
            })
            .then(data => (this.data = data.data));
        }
    }
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