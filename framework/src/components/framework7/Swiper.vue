<template>
  <f7-view main>
    <f7-page>
      <f7-navbar ref="navbar" title="Swiper" back-link="Back"></f7-navbar>

      <f7-block-title>Minimal layout</f7-block-title>
      <f7-swiper>
        <f7-swiper-slide>Slide 1</f7-swiper-slide>
        <f7-swiper-slide>Slide 2</f7-swiper-slide>
        <f7-swiper-slide>Slide 3</f7-swiper-slide>
      </f7-swiper>

      <f7-block-title>With all controls</f7-block-title>
      <f7-swiper pagination navigation scrollbar>
        <f7-swiper-slide>Slide 1</f7-swiper-slide>
        <f7-swiper-slide>Slide 2</f7-swiper-slide>
        <f7-swiper-slide>Slide 3</f7-swiper-slide>
      </f7-swiper>

      <f7-block-title>With additional parameters</f7-block-title>
      <f7-swiper navigation :params="{speed:500, slidesPerView: 3, spaceBetween: 20}">
        <f7-swiper-slide>Slide 1</f7-swiper-slide>
        <f7-swiper-slide>Slide 2</f7-swiper-slide>
        <f7-swiper-slide>Slide 3</f7-swiper-slide>
      </f7-swiper>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "ExSwiper",
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

<style scoped>
.swiper-slide {
    background: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
</style>
