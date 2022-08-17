<script>
import { mapGetters } from "vuex";
import dummyData from "../utils/dummyData.js";

export default {
  name: "AppTransactions",
  components: {
    dummyData,
  },
  mounted() {
    this.dummyData = dummyData;
  },
  computed: {
    ...mapGetters(["getConnectedAccount"]),
  },
  methods: {
    // fetchGifs: async (payload) => {
    //   try {
    //     let url = "https://api.giphy.com/v1/gifs/search?api_key=SHRyb9SVypB8gVDIpz5LOcL03BX9VsbZq=";
    //     url.concat(payload.keyword.split(" ").join("")).concat("}&limit=1");
    //     const response = await fetch(url);
    //     const { data } = await response.json();
    //     return data[0]?.images?.downsized_medium.url;
    //   } catch (error) {
    //     return "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284";
    //   }
    //   }
  },
};
</script>

<template>
  <div
    class="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"
  >
    <div class="flex flex-col md:p-12 py-12 px-4">
      <h3
        v-if="getConnectedAccount"
        class="text-white text-3xl text-center my-2"
      >
        Latest Transactions
      </h3>
      <h3 v-else class="text-white text-3xl text-center my-2">
        Connect your account to see the latest transactions
      </h3>
      <div class="flex flex-wrap justify-center items-center mt-10">
        <div
          v-for="(item, index) in dummyData"
          v-bind:key="index"
          item="transaction"
        >
          <div
            class="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl"
          >
            <div class="flex flex-col items-center w-full mt-3">
              <div class="display-flex justify-start w-full mb-6 p-2">
                <a
                  :href="
                    'https://goerli.etherscan.io/address/' + item.addressFrom
                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  <p class="text-white text-base">
                    From: {{ item.addressFrom }}
                  </p>
                </a>
                <a
                  :href="
                    'https://goerli.etherscan.io/address/' + item.addressFrom
                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  <p class="text-white text-base">To: {{ item.addressTo }}</p>
                </a>
                <p class="text-white text-base">
                  Amount: {{ item.amount }} ETH
                </p>

                <br />
                <p class="text-white text-base">Message: {{ item.message }}</p>
              </div>
              <img
                :src="item.url"
                alt="nature"
                class="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
              />
              <div class="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                <p class="text-[#37c7da] font-bold">{{ item.timestamp }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <TransactionCard
          v-for="(transaction, index) in transactions"
          v-bind:key="index"
          :transactionItem="transaction"
        /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  overflow: hidden;
}
</style>
