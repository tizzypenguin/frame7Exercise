<template>
  <div id="app">
    <f7-app :params="{ theme: 'ios', name: 'My App', id: 'com.demoapp.test' }">
      <f7-statusbar></f7-statusbar>
      <router-view/>
    </f7-app>
  </div>
</template>

<script>
export default {
	name: 'App',
	created() {}
}
</script>

<style>
</style>
