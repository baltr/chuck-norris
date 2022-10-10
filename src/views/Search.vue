<template>
    <div>
        <router-link to="/"><button>Home</button></router-link>
        <router-link to="/Favourites"><button>Favourites</button></router-link>
        <router-link to="/Categories"><button>Categories</button></router-link>
        <router-link to="/Search"><button>Search</button></router-link>
        <input v-model="query" @input="addJoke"/>
        <div v-for="(joke, index) in jokeList" :key="index" @click="removeJoke(index)">
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
            query:null,
            jokeList:[]
        }
    },
    methods:{
        addJoke(){
            axios.get("https://api.chucknorris.io/jokes/search?query=" + this.query).then(response => {
                this.jokeList = []
                console.log(response)
                var tempList = response.data.result.slice(0,10).forEach(joke => {
                    this.jokeList.unshift(joke.value)
                })
                console.log(tempList)
            }).catch(response => console.log(response))
        },
        removeJoke(index){
            if (index > -1){
                this.jokeList.splice(index, 1)
            }
        }
    },
    components:{
        Joke
    }
}
</script>