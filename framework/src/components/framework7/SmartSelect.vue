<template>
  <f7-view main>
    <f7-page>
      <f7-navbar ref="navbar" title="SmartSelect" back-link="Back"></f7-navbar>

      <f7-list>
        <f7-list-item title="Fruit" smart-select>
          <select name="fruits">
            <option value="apple" selected>Apple</option>
            <option value="pineapple">Pineapple</option>
            <option value="pear">Pear</option>
            <option value="orange">Orange</option>
            <option value="melon">Melon</option>
            <option value="peach">Peach</option>
            <option value="banana">Banana</option>
          </select>
        </f7-list-item>

        <f7-list-item title="Car" smart-select :smart-select-params="{openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search car'}">
          <select name="car" multiple>
            <optgroup label="Japanese">
              <option value="honda" selected>Honda</option>
              <option value="lexus">Lexus</option>
              <option value="mazda">Mazda</option>
              <option value="nissan">Nissan</option>
              <option value="toyota">Toyota</option>
            </optgroup>
            <optgroup label="German">
              <option value="audi" selected>Audi</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
              <option value="vw">Volkswagen</option>
              <option value="volvo">Volvo</option>
            </optgroup>
            <optgroup label="American">
              <option value="cadillac">Cadillac</option>
              <option value="chrysler">Chrysler</option>
              <option value="dodge">Dodge</option>
              <option value="ford" selected>Ford</option>
            </optgroup>
          </select>
        </f7-list-item>

        <f7-list-item title="Mac or Windows" smart-select :smart-select-params="{openIn: 'sheet'}">
          <select name="mac-windows">
            <option value="mac" selected>Mac</option>
            <option value="windows">Windows</option>
          </select>
        </f7-list-item>
        <f7-list-item title="Super Hero" smart-select :smart-select-params="{openIn: 'popover'}">
          <select name="superhero" multiple>
            <option value="Batman" selected>Batman</option>
            <option value="Superman">Superman</option>
            <option value="Hulk">Hulk</option>
            <option value="Spiderman">Spiderman</option>
            <option value="Ironman">Ironman</option>
            <option value="Thor">Thor</option>
            <option value="Wonder Woman">Wonder Woman</option>
          </select>
        </f7-list-item>

      </f7-list>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "ExSmartSelect",
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
