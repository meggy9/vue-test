<template>
 	<v-app>
    	<app-header/>
    	<router-view></router-view>
	</v-app>
</template>

<script>
	
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>

</style>
