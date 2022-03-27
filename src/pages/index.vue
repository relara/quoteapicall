<script setup>
import { useApi } from "../composables/useApi";

const { quotes, getQuotes } = useApi();
</script>

<template>
<router-link class="bg-white rounded-lg" v-for="quote in quotes" :key="quote.author" :to="`/quote/${quote.author}`">
    <ul>
        <div> 
            <h3>{{ quotes.author }}</h3>
            <p>{{ quotes }}</p>
        </div>
    </ul>
</router-link>
</template>