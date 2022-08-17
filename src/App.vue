<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import AppServices from "./components/AppServices.vue";
import AppWelcome from "./components/AppWelcome.vue";
import AppTransactions from "./components/AppTransactions.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppTransactions,
    AppWelcome,
    AppServices,
    AppFooter,
  },
};
</script>

<template>
  <div class="min-h-screen">
    <div class="gradient-bg-welcome">
      <AppNavbar />
      <AppWelcome />
    </div>
    <AppServices />
    <AppTransactions />
    <AppFooter />
  </div>
</template>

<style scoped></style>
