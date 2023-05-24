<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: "TreeLeaf",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
