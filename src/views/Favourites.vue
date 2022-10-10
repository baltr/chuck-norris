<template>
    <div>
        <router-link to="/"><button>Home</button></router-link>
        <router-link to="/Favourites"><button>Favourites</button></router-link>
        <router-link to="/Categories"><button>Categories</button></router-link>
        <router-link to="/Search"><button>Search</button></router-link>
        <div v-for="joke in $store.getters.getFavouriteJokes" :key="joke">
            <Joke :joke="joke"/>
            <button @click="$store.commit('removeFavouriteJoke', joke)">Remove</button>
        </div> 
    </div>
</template>

<script>
import Joke from "@/components/Joke.vue"

export default {
    components:{
        Joke
    }
}
</script>