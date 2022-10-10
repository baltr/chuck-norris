<template>
    <div>
        <router-link to="/"><button>Home</button></router-link>
        <router-link to="/Favourites"><button>Favourites</button></router-link>
        <router-link to="/Categories"><button>Categories</button></router-link>
        <router-link to="/Search"><button>Search</button></router-link>
        <div v-for="category in categories" :key="category">
            <button @click="addJoke(category)">{{category}}</button> 
        </div>
        <div v-for="joke in jokeList" :key="joke">
            <Joke :joke="joke"/>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Joke from "@/components/Joke.vue"

export default {
    data(){
        return{
            categories:null,
            jokeList:[]
        }
    },
    methods:{
        fetchCategories(){
            axios.get("https://api.chucknorris.io/jokes/categories").then(response => {
                console.log(response.data)
                this.categories = response.data
            }).catch(response => console.log(response))
        },
        addJoke(category){
            axios.get("https://api.chucknorris.io/jokes/random?category=" + category).then(response => {
                this.jokeList.unshift(response.data.value)
            }).catch(response => console.log(response))
        }
    },
    components:{
        Joke
    },
    created(){
        this.fetchCategories()
    }
}
</script>