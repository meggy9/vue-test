<template>
    <div class="header">
        <v-row>
            <v-col cols="12">
                <v-toolbar color="purple" dark cols="6">
                    <v-tabs cols="6">
                        <v-tab>
                            <router-link to="/stocks">Stocks</router-link>
                        </v-tab>
                        <v-tab>
                            <router-link to="/portfolio">Portfolio</router-link>
                        </v-tab>
                    </v-tabs>
                    <v-btn>End day</v-btn>
                </v-toolbar>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hi: 'Hello World!!!'
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
  
</style>