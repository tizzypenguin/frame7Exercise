<template>
  <f7-page @page:beforeremove="onPageBeforeRemove">
    <f7-navbar ref="navbar" title="Popup" back-link="Back"></f7-navbar>

    <f7-block>
      <p>
        <f7-button fill popup-open=".demo-popup">Open Popup</f7-button>
      </p>
      <p>
        <f7-button fill @click="popupOpened = true">Open Via Prop Change</f7-button>
      </p>
      <p>
        <f7-button fill @click="createPopup">Create Dynamic Popup</f7-button>
      </p>
      <p>
        <f7-button fill popup-open=".demo-popup-swipe">Swipe To Close</f7-button>
      </p>
      <p>
        <f7-button fill popup-open=".demo-popup-swipe-handler">With Swipe Handler</f7-button>
      </p>
    </f7-block>
    <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="Popup Title">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula...</p>
        </f7-block>
      </f7-page>
    </f7-popup>

    <f7-popup class="demo-popup-swipe" swipe-to-close>
      <f7-page>
        <f7-navbar title="Swipe To Close">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>

        <div style="height: 100%" class="display-flex justify-content-center align-items-center">
          <p>Swipe me up or down</p>
        </div>
      </f7-page>
    </f7-popup>

    <f7-popup class="demo-popup-swipe-handler" swipe-to-close swipe-handler=".swipe-handler">
      <f7-page>
        <f7-block-title large>Hello!</f7-block-title>
        <f7-block strong>
          <p class="swipe-handler"><b>Swipe works only on this paragraph</b></p>
          <p>Lorem ipsum dolor sit amet...</p>
        </f7-block>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
export default {
  name: "ExPopup",
  data() {
    return {
      popupOpened: false
    };
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
  methods: {
    createPopup() {
      const self = this;
      // Create popup
      if (!self.popup) {
        self.popup = self.$f7.popup.create({
          content: `
            <div class="popup">
              <div class="page">
                <div class="navbar">
                  <div class="navbar-inner">
                    <div class="title">Dynamic Popup</div>
                    <div class="right"><a href="#" class="link popup-close">Close</a></div>
                  </div>
                </div>
                <div class="page-content">
                  <div class="block">
                    <p>This popup was created dynamically</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non...</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
        });
      }
      // Open it
      self.popup.open();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy popup when page removed
      if (self.popup) self.popup.destroy();
    },
  }
};
</script>

<style>
</style>
