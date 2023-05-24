<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center">
      <ChevronIcon />
      <span class="label">{{ name }}</span>
    </div>
    <ul v-if="subNodesData">
      <template v-if="Array.isArray(subNodesData)">
        <li
          v-for="{ _nodeId, _name, cat, leaf } in subNodesData"
          class="d-flex"
          :key="_nodeId"
        >
          <TreeNode :name="_name" :subNodes="cat" :leaf="leaf" />
        </li>
      </template>
      <template v-else>
        <li>
          <TreeNode
            :name="subNodesData._name"
            :subNodes="subNodesData.cat"
            :leaf="subNodesData.leaf"
          />
        </li>
      </template>
    </ul>
    <ul v-if="leaf">
      <li v-for="{ _nodeId, _name } in leaf" :key="_nodeId">
        <TreeLeaf :name="_name" />
      </li>
    </ul>
  </div>
</template>

<script>
import ChevronIcon from "@/components/Icons/ChevronIcon.vue";
import TreeLeaf from "@/components/Tree/TreeLeaf.vue";

export default {
  name: "TreeNode",
  components: { TreeLeaf, ChevronIcon },
  props: {
    subNodes: {
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    leaf: {
      type: Array,
      default: null,
    },
  },
  computed: {
    subNodesData() {
      if (!this.subNodes) return false;
      if (Array.isArray(this.subNodes)) {
        return this.subNodes;
      }
      const { _nodeId, _name, cat, leaf } = this.subNodes;
      return { leaf, _name, cat, _nodeId };
    },
  },
};
</script>

<style scoped></style>
