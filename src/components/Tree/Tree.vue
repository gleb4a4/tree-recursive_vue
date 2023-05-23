<template>
  <div>
    <div class="d-flex align-items-center">
      <ChevronIcon />
      <span>{{ mainTree.tree.cat._name }}</span>
    </div>
    <TreeNode
      v-for="{ _nodeId, _name, cat } in mainTree.tree.cat.cat"
      :key="_nodeId"
      :name="_name"
      :subNodes="cat"
    />
  </div>
</template>

<script>
import ChevronIcon from "@/components/Icons/ChevronIcon.vue";
import TreeNode from "@/components/Tree/TreeNode.vue";

export default {
  name: "TreeComponent",
  components: { TreeNode, ChevronIcon },
  props: {
    mainTree: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped></style>
