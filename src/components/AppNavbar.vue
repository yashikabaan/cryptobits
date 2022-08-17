<script>
export default {
  name: "AppNavbar",
  data: function () {
    return {
      NavListItems: ["Market", "Exchange", "Tutorials", "Wallets"],
      toggleMenu: true,
    };
  },
  methods: {
    toggle() {
      this.toggleMenu = !this.toggleMenu;
    },
  },
};
</script>

<template>
  <nav class="w-full flex md:justify-center navbar-class">
    <div class="md:flex-[0.6] flex-initial justify-center items-center">
      <img
        src="../assets/logo.png"
        alt="logo"
        class="h-10 cursor-pointer"
        style="margin-left: 15px"
      />
    </div>
    <ul
      class="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
    >
      <li
        v-for="(item, index) in NavListItems"
        :key="index"
        class="mx-4 cursor-pointer"
      >
        {{ item }}
      </li>
      <li
        class="bg-[#2952e3] py-3 px-8 mx-5 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
        Login
      </li>
    </ul>
    <div class="flex relative">
      <img
        src="../assets/open.png"
        v-if="toggleMenu"
        class="text-white md:hidden cursor-pointer my-toggle-class"
        @click="toggle()"
      />
      <ul
        v-if="!toggleMenu"
        class="px-10 z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in list-none"
      >
        <img
          src="../assets/close.png"
          v-if="!toggleMenu"
          class="text-white md:hidden cursor-pointer my-toggle-class"
          @click="toggle()"
        />
        <li
          v-for="(item, index) in NavListItems"
          :key="index"
          class="mx-4 cursor-pointer text-xl w-full my-2"
        >
          {{ item }}
        </li>
        <li class="mx-4 cursor-pointer text-xl w-full my-2">Login</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar-class {
  height: 60px;
  padding-top: 20px;
  align-items: center;
}

.my-toggle-class {
  height: 40px;
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>
