<template>
  <div class="list">
    <div v-for="item in $static.items.edges" :key="item.node.id" class="item">
      <g-link>
        <div class="item-title">{{ item.node.title }}</div>
        <div class="item-image">
          <img :src="item.node.fields.image" alt="Product image">
        </div>
      </g-link>
    </div>
  </div>
</template>

<static-query>
  query Items {
    items: allStoreItem {
      edges {
        node {
          id
          title
          content 
          fields {
            description
            price
            image
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
  created() {
    console.log(this.$static.items);
  }
};
</script>

<style lang="scss" scoped>
.list {
  border-radius: 7px;
  border: $secondary-border;
  padding: $padding;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-gap: $padding;

  .item {
    .item-title {
      font-weight: 600;
      font-size: 1.3rem;
    }
    .item-image img {
      width: 100%;
    }
    margin-bottom: 10px;
  }

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.12),
      0 2px 4px 0 rgba(0, 0, 0, 0.08);
    transition: 0.3s;
    // border: none;
  }
}
</style>

