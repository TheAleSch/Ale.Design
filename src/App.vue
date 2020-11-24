<template>
  <div class="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About me</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer>
      <p>Made with ❤ in São Paulo ~ Proudly coded by me using VueJS</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./scss/_typography.scss";
@import "./scss/_config-resets.scss";
@import "./scss/_project.scss";

.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.fade-leave {
  transform: translateY(0);
  opacity: 1;
}
.fade-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.6s ease-in-out;
}
.fade-enter-active {
  transition: all 0.6s ease-in-out;
}

.fade-enter {
  transform: translateY(+150px);
  opacity: 0;
}

#app {
}

#nav {
  padding: 30px;
  background-color: #000;
  display: flex;
  @media only screen and (max-width: $breakpoint-phone) {
    padding: 16px;
  }

  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    padding: 24px 0 16px 24px;
  }

  a {
    font-weight: 500;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    line-height: 28px;
    text-decoration: none;
    text-align: left;
    text-transform: uppercase;
    border: 0px;
    padding: 8px 0 8px 0;
    margin: 32px 24px 16px 48px;
    transition: all 0.2s ease-in-out;
    border-bottom: rgba($color: #000000, $alpha: 0) 4px solid;
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 14px;
      padding: 4px 0 4px 0;
      margin: 0 8px 8px 24px;
    }

    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      font-size: 18px;
      padding: 4px 0 4px 0;
      margin: 0 8px 8px 24px;
    }

    &:hover {
      border-bottom: #545454 4px solid;
      transform: scale(1.1);
    }
    &.router-link-exact-active {
      border-bottom: #fff 4px solid;
    }
  }
}

footer {
  background-color: #000;
  height: 80px;

  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
  @media only screen and (max-width: $breakpoint-phone) {
    height: 112px;
  }
  p {
    color: white;
    font-weight: 600;
    font-size: 16px;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
