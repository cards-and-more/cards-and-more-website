<template>
  <Layout>
    <div class="top">
      <div>
        <div class="page-title">{{ quotes[no] }}</div>
        <div>{{ $static.metaData.siteDescription }}</div>
        <div>
          <g-link to="/">
            <button class="dark-red">See store</button>
          </g-link>
        </div>
      </div>
      <img
        src="http://www.pngmart.com/files/6/Dahlia-Transparent-Background-1.png"
        alt="Large image"
      >
    </div>

    <div>
      <InlineItemList />
    </div>

  </Layout>
</template>

<script>
import InlineItemList from '../components/InlineItemList.vue'
export default {
  components: {
    InlineItemList
  },
  metaInfo: {
    title: "Index"
  },
  data: () => {
    return {
      quotes: [
        "Your creativity, our hardwork",
        "We will do the work for you",
        "Quotes are a great way to engage customers"
      ],
      no: 0
    };
  },
  created() {
    this.no = Math.round(Math.random() * (this.quotes.length - 1));
    console.log(this.no);
  }
};
</script>

<static-query>
  query {
    metaData {
      siteName
      siteDescription
    }
  }
</static-query>

<style lang="scss" scoped>
.top {
  // background-color: yellow;
  display: grid;
  grid-template-columns: 5fr 8fr;
  grid-gap: $padding;
  align-items: center;

  @include for-phone-only {
    grid-template-columns: 1fr;
  }

  & div > div {
    // background-color: red;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
  }
}
</style>

