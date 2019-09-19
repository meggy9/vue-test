<template>
    <div class="header">
        <v-row>
            <v-col>
                <v-toolbar color="purple" dark>
                    <v-tabs background-color="transparent">
                        <v-tab to="/stocks">
                            Stocks
                        </v-tab>
                        <v-tab to="/portfolio">
                            Portfolio
                        </v-tab>
                    </v-tabs>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" depressed class="pink white--text">End day</v-btn>
                        </template>
                        <span>End day button</span>
                    </v-tooltip>
                </v-toolbar>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hi: 'Hello World!!!',

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
  
</style>