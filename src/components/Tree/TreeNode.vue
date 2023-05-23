<template>
  <div>
    <span class="label">{{ name }}</span>

    <ul v-if="subNodes">
      <TreeNode
        v-for="{ _nodeId, _name, cat } in subNodes"
        :key="_nodeId"
        :name="_name"
        :subNodes="cat"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    subNodes: {
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped></style>
