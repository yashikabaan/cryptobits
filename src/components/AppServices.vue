<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AppServices",
  components: {},
  data: () => {
    return {
      title: [
        "Security gurantee",
        "Best exchange rates",
        "Fastest transactions",
      ],
      subtitle:
        "Security is guranteed. We always maintain privacy and maintain the quality of our products",
    };
  },
};
</script>

<template>
  <div class="flex w-full justify-center items-center gradient-bg-services">
    <div
      class="flex mf:flex-row flex-col items-center justify-between md:p-20 py-20 px-4"
    >
      <div class="flex-1 flex flex-col justify-start items-start">
        <h1 class="text-white text-3xl sm:text-5xl py-2 text-gradient">
          Services that we
          <br />
          continue to improve
        </h1>
        <p
          class="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base"
        >
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div class="flex-1 flex flex-col justify-start items-center">
        <div
          class="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl"
        >
          <div
            class="m-4 w-10 h-10 rounded-full flex justify-center items-center bg-[#2952E3]"
          ></div>
          <div class="ml-5 flex flex-col flex-1">
            <h3 class="mt-2 text-white text-lg">{{ title[0] }}</h3>
            <p class="mt-1 text-white text-sm md:w-9/12">
              {{ subtitle }}
            </p>
          </div>
        </div>

        <div
          class="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl"
        >
          <div
            class="m-4 w-10 h-10 rounded-full flex justify-center items-center bg-[#8945F8]"
          ></div>
          <div class="ml-5 flex flex-col flex-1">
            <h3 class="mt-2 text-white text-lg">{{ title[1] }}</h3>
            <p class="mt-1 text-white text-sm md:w-9/12">
              {{ subtitle }}
            </p>
          </div>
        </div>

        <div
          class="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl"
        >
          <div
            class="m-4 w-10 h-10 rounded-full flex justify-center items-center bg-[#F84550]"
          ></div>
          <div class="ml-5 flex flex-col flex-1">
            <h3 class="mt-2 text-white text-lg">{{ title[2] }}</h3>
            <p class="mt-1 text-white text-sm md:w-9/12">
              {{ subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
