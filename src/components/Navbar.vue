<template>
  <div>
    <nav>
      <div class="logo">
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </div>
      <div class="right">
        <g-link v-for="item of navItems" v-bind:key="item.text" v-if="item.top" class="nav-item">
          <div class="text">{{ item.text }}</div>
          <font-awesome v-bind:icon="item.icon"/>
        </g-link>
        <g-link>
          <button class="orange">
            <font-awesome icon="shopping-cart"/>
            <span class="item-count">
              {{ itemCount }}
            </span>
          </button>
        </g-link>
      </div>
    </nav>
    <div class="mobile-nav">
      <g-link v-for="item of navItems" v-bind:key="item.text" class="nav-item">
        <font-awesome v-bind:icon="item.icon"/>
        <div class="text">{{ item.text }}</div>
      </g-link>
    </div>
  </div>
</template>

<script>
import Vector from '@/assets/Vector.svg'
export default {
  components: {
    Vector
  },
  data: () => {
    return {
      navItems: [
        { text: "Home", icon: "home", to: "/", top: false },
        { text: "Gifts", icon: "gift", to: "/gifts", top: true },
        { text: "Cards", icon: "credit-card", to: "/cards", top: true }
      ],
      itemCount: 0
    };
  }
};
</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
nav {
  padding: $container-padding;
  background-color: $white;
  color: $white;

  border-bottom: $main-border;
  
  top: 0;
  width: 100%;

  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

  .logo {
    font-size: 1.8rem;
    font-weight: $ultra-bold;

    a {
      color: black;
      text-decoration: none;
    }

    @include for-phone-only {
      font-size: 1.3rem;
    }
  }

  .right {
    justify-self: end;
    font-size: 1.3rem;

    .nav-item {
      @include for-phone-only {
        display: none;
      }
    }

    a {
      color: black;
      text-decoration: none;

      & + a {
        margin-left: $padding;
      }

      .text {
        display: inline;
        margin-right: 5px;

        @include for-tablet-landscape {
          display: none;
        }
      }
    }
  }
}

.mobile-nav {
  display: none;
  position: fixed;
  bottom: 0;
  background: $white;
  width: 100%;

  padding: $padding;
  padding-bottom: 25px;


  @include for-phone-only {
    display: block;
    border-top: $main-border;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;

    .nav-item {
      color: black;
      font-weight: 700;
      font-size: 1.7rem;
      text-decoration: none;
      & > * {
        display: inline;
      }
      .text {
        margin-left: 5px;
      }
    }
  }
}
</style>
