<template>
      <div id="dynamic-component-demo" class="demo">
    Pood
    </div>
</template>

<script>
import Vue from "vue";
export default {
  name: 'TabHome',
}
  Vue.component("tab-home", {
    template: "<div>Home component</div>"
  });
  Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
  });
  Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
  });

  new Vue({
    el: "#dynamic-component-demo",
    data: {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"]
    },
    methods: {
      currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
      }
    }
  });
</script>
