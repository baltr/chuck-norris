<template>
    <div>
        <router-link to="/"><button>Home</button></router-link>
        <router-link to="/Favourites"><button>Favourites</button></router-link>
        <router-link to="/Categories"><button>Categories</button></router-link>
        <router-link to="/Search"><button>Search</button></router-link>
        <button @click="addJoke">Add joke</button>
        <div :class="isFavouriteColor(joke)" v-for="(joke, index) in jokeList" :key="index">
            <Joke :joke="joke"/>
            <button @click="favourite(joke)">Favourite</button>
            <button :disabled="isFavouriteDisableButton(joke)" @click="removeJoke(index)">Remove</button>
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
        },
        removeJoke(index){
            if (index > -1){
                this.jokeList.splice(index, 1)
            }
        },
        favourite(joke){
            var tempList = this.$store.getters.getFavouriteJokes
            console.log(tempList.length)
            if (tempList.length == 0) {
                this.$store.commit('addFavouriteJoke', joke)
            } else {
                if (tempList.indexOf(joke) > -1) {
                    this.$store.commit('removeFavouriteJoke', joke)
                } else {
                    this.$store.commit('addFavouriteJoke', joke)
                }
            }
        },
        isFavouriteColor(joke){
            if (this.$store.getters.getFavouriteJokes.indexOf(joke) > -1) return 'favouriteJoke'
            else return 'notFavouriteJoke'
        },
        isFavouriteDisableButton(joke){
            if (this.$store.getters.getFavouriteJokes.indexOf(joke) > -1) return true
            else return false
        }
    },
    components:{
        Joke
    }
}
</script>

<style>
.favouriteJoke{
    background-color: goldenrod;
};
.notFavouriteJoke{
    background-color: transparent;
}
</style>