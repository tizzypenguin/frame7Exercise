<template>
  <f7-page>
    <f7-navbar ref="navbar" title="Skeleton" back-link="Back"></f7-navbar>

    <f7-block-title>Skeleton List</f7-block-title>
    <f7-list media-list class="skeleton-text">
      <f7-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" slot="media"></f7-skeleton-block>
      </f7-list-item>
      <f7-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" slot="media"></f7-skeleton-block>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Skeleton Card</f7-block-title>
    <f7-card
      class="skeleton-text"
      title="Card Header"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
      footer="Card Footer"
    ></f7-card>

    <f7-block strong>
      <p>It supports few loading effects:</p>
      <f7-row tag="p">
        <f7-button fill small round class="col" @click="load('fade')">Fade</f7-button>
        <f7-button fill small round class="col" @click="load('blink')">Blink</f7-button>
        <f7-button fill small round class="col" @click="load('pulse')">Pulse</f7-button>
      </f7-row>
    </f7-block>
    <f7-list media-list v-if="loading">
      <f7-list-item
        v-for="n in 3"
        :key="n"
        :class="`skeleton-text skeleton-effect-${effect}`"
        title="Full Name"
        subtitle="Position"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" slot="media"></f7-skeleton-block>
      </f7-list-item>
    </f7-list>
    <f7-list media-list v-else>
      <f7-list-item
        title="John Doe"
        subtitle="CEO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <img src="https://placeimg.com/80/80/people/1" style="width: 40px; height: 40px; border-radius: 50%" slot="media">
      </f7-list-item>
      <f7-list-item
        title="Jane Doe"
        subtitle="Marketing"
        text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <img src="https://placeimg.com/80/80/people/2" style="width: 40px; height: 40px; border-radius: 50%" slot="media">
      </f7-list-item>
      <f7-list-item
        title="Kate Johnson"
        subtitle="Admin"
        text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <img src="https://placeimg.com/80/80/people/3" style="width: 40px; height: 40px; border-radius: 50%" slot="media">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: "ExSkeleton",
  data() {
    return {
      loading: false,
      effect: null
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
    load: function (effect) {
      var self = this;
      if (self.loading) return;
      self.effect = effect;
      self.loading = true;
      setTimeout(() => {
        self.loading = false;
      }, 3000);
    }
  }
};
</script>

<style>
</style>
