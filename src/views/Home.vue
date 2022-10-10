<template>
    <div>
        <router-link to=""><button>Home</button></router-link>
        <router-link to=""><button>Favourites</button></router-link>
        <router-link to=""><button>Categories</button></router-link>
        <router-link to=""><button>Search</button></router-link>
        <button @click="addJoke">Add joke</button>
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
            jokeList:[]
        }
    },
    methods:{
        addJoke(){
            axios.get("https://api.chucknorris.io/jokes/random").then(response => {
                this.jokeList.unshift(response.data.value)
            }).catch(response => console.log(response))
        }
    },
    computed:{

    },
    components:{
        Joke
    }
}
</script>