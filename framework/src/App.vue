<template>
  <div id="app">
    <f7-app :params="{ theme: 'ios', name: 'My App', id: 'com.demoapp.test' }">
      <f7-statusbar></f7-statusbar>
      <router-view/>
      <!-- Left resizable Panel with Reveal effect -->
      <f7-panel left reveal resizable>
        <f7-view>
          <f7-page>
            <f7-block>Left panel content</f7-block>
          </f7-page>
        </f7-view>
      </f7-panel>

      <!-- Right resizable Panel with Cover effect and dark layout theme -->
      <f7-panel right resizable theme-dark>
        <f7-view>
          <f7-page>
            <f7-block>Right panel content</f7-block>
          </f7-page>
        </f7-view>
      </f7-panel>
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
