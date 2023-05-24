<template>
  <div id="app" v-if="mainTree">
    <Tree :mainTree="mainTree" />
  </div>
</template>

<script>
import { SET_TREE_DATA } from "@/store/MutationTypes";
import apiData from "../api_response.json";
import Tree from "@/components/Tree/Tree.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Tree,
  },
  computed: {
    ...mapState({
      mainTree: "treeData",
    }),
  },
  mounted() {
    this.$store.commit(SET_TREE_DATA, apiData);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-items-center {
  align-items: center;
}
.justify-content-center {
  justify-content: center;
}
</style>
