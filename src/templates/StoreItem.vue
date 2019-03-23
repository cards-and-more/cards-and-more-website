<template>
  <Layout>
    <div class="page-title">
      {{ $page.storeItem.title }}
    </div>
    <div>
      ${{ $page.storeItem.fields.price }}
    </div>
    <div>
      {{ $page.storeItem.fields.description }}
    </div>
  </Layout>
</template>

<page-query>
query StoreItem ($path: String!) {
  storeItem: storeItem (path: $path) {
    id
    title
    fields {
      price
      description
    }
  }
}
</page-query>