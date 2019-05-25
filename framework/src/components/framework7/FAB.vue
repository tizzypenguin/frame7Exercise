<template>
  <f7-page>
    <f7-navbar ref="navbar" title="FAB" back-link="Back"></f7-navbar>

    <!-- Toolbar FAB Morph Target -->
    <f7-toolbar bottom class="fab-morph-target">
      <f7-link>Link 1</f7-link>
      <f7-link>Link 2</f7-link>
      <f7-link>Link 3</f7-link>
    </f7-toolbar>

    <!-- FAB Left Top (Yellow) -->
    <f7-fab position="left-top" slot="fixed" color="yellow">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
      <f7-icon ios="f7:close" aurora="f7:close" md="material:close"></f7-icon>
      <f7-fab-buttons position="bottom">
        <f7-fab-button>1</f7-fab-button>
        <f7-fab-button>2</f7-fab-button>
        <f7-fab-button>3</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>

    <!-- FAB Right Top (Pink) -->
    <f7-fab position="right-top" slot="fixed" color="pink">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
      <f7-icon ios="f7:close" aurora="f7:close" md="material:close"></f7-icon>
      <f7-fab-buttons position="left">
        <f7-fab-button>1</f7-fab-button>
        <f7-fab-button>2</f7-fab-button>
        <f7-fab-button>3</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>

    <!-- FAB Center (Green) -->
    <f7-fab position="center-center" slot="fixed" color="green">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
      <f7-icon ios="f7:close" aurora="f7:close" md="material:close"></f7-icon>
      <f7-fab-buttons position="center">
        <f7-fab-button>1</f7-fab-button>
        <f7-fab-button>2</f7-fab-button>
        <f7-fab-button>3</f7-fab-button>
        <f7-fab-button>4</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>

    <!-- FAB Left Bottom (Blue) -->
    <!-- Will morph to Toolbar -->
    <f7-fab position="left-bottom" slot="fixed" morph-to=".toolbar.fab-morph-target">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
      <f7-icon ios="f7:close" aurora="f7:close" md="material:close"></f7-icon>
    </f7-fab>

    <!-- FAB Right Bottom (Orange) -->
    <f7-fab position="right-bottom" slot="fixed" color="orange">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
      <f7-icon ios="f7:close" aurora="f7:close" md="material:close"></f7-icon>
      <f7-fab-buttons position="top">
        <f7-fab-button label="Action 1">1</f7-fab-button>
        <f7-fab-button label="Action 2">2</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>

    <!-- Extended FAB Center Bottom (Red) -->
    <f7-fab position="center-bottom" slot="fixed" text="Create" color="red">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
    </f7-fab>

    <f7-block>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quo rem beatae, delectus eligendi est saepe molestias ... voluptatibus eligendi.</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: "ExFAB",
  data() {
    return {};
  },
  components: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
};
</script>

<style>
</style>
