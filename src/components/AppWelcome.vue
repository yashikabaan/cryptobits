<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppWelcome",
  component: {},
  methods: {
    ...mapActions([
      "connectWallet",
      "checkIfWalletIsConnect",
      "sendTransactions",
    ]),
    ...mapMutations(["setFormData"]),
    Submit() {
      this.setFormData({
        addressTo: this.addressTo,
        amount: this.amount.toString(),
        keyword: this.keyword,
        message: this.message,
      });

      this.sendTransactions();
      this.addressTo = "";
      this.amount = "";
      this.keyword = "";
      this.message = "";
    },
  },
  computed: {
    ...mapGetters(["getConnectedAccount"]),
  },
  beforeMount() {
    this.checkIfWalletIsConnect();
  },

  data() {
    return {
      addressTo: "",
      amount: 0,
      keyword: "",
      message: "",
      inputStyle:
        "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism",
      commonStylesLeftTop:
        "rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",
      commonStyles:
        "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",
      commonStylesRightTop:
        "rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",
      commonStylesLeftBottom:
        "rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",
      commonStylesRightBottom:
        "rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",
    };
  },
};
</script>

<template>
  <div class="flex w-full justify-center items-center">
    <div
      class="flex md:flex-row w-[60vw] flex-col items-start justify-between md:p-20 py-12 px-4"
    >
      <div class="flex flex-1 justify-start flex-col md:mr-10">
        <h1 class="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br />
          across the world
        </h1>
        <p
          class="text-left mt-5 text-white font-light md:width-9/12 w-11/12 text-base"
        >
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          cryptobits.
        </p>
        <button
          v-if="!getConnectedAccount"
          type="button"
          @click="connectWallet()"
          class="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p class="text-white text-base font-semibold">Connect Wallet</p>
        </button>

        <div class="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div :class="commonStylesLeftTop">Reliability</div>
          <div :class="commonStyles">Security</div>
          <div :class="commonStylesRightTop">Ethereum</div>
          <div :class="commonStylesLeftBottom">Web 3.0</div>
          <div :class="commonStyles">Low fees</div>
          <div :class="commonStylesRightBottom">Blockchain</div>
        </div>
      </div>
      <div
        class="flex flex-col flex-1 items-center justify-center justify-start w-full mf:mt-0 mt-10"
      >
        <div
          class="p-3 justify-end items-start flex-col rounded-xl h-60 sm:w-78 w-full my-5 eth-card white-glassmorphism"
        >
          <div class="flex justify-between flex-col w-full h-full">
            <div class="flex justify-bwtween items-start">
              <img class="w-11 h-11 rounded-full" src="../assets/eth.png" />
            </div>
            <p
              class="text-white font-semibold text-sm mt-8"
              style="font-size: 18px"
            >
              {{ getConnectedAccount }}
            </p>
            <p
              class="text-white font-bold text-lg mt-1"
              style="font-size: 22px"
            >
              Ethereum
            </p>
          </div>
        </div>
        <div
          class="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"
        >
          <input
            placeholder="Address To"
            name="addressTo"
            type="text"
            v-model="addressTo"
            :class="inputStyle"
          />
          <input
            placeholder="Amount (Eth)"
            name="amount"
            type="number"
            v-model="amount"
            :class="inputStyle"
          />
          <input
            placeholder="Keyword (gif)"
            name="keyword"
            type="text"
            v-model="keyword"
            :class="inputStyle"
          />
          <input
            placeholder="Enter Message"
            name="message"
            type="text"
            v-model="message"
            :class="inputStyle"
          />
          <div class="h-[1px] w-full bg-gray-400 my-2" />
          <div v-if="false">
            <div class="flex justify-center items-center py-3">
              <div
                class="animate-spin rounded-full h-20 w-20 border-b-2 border-red-700"
              ></div>
            </div>
          </div>
          <button
            v-else
            type="button"
            @click="Submit()"
            class="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
