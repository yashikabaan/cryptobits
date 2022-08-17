<script>
export default {
  props: { item },
  name: "TransactionCard",
  data: {},
};
</script>

<template>
  <div
    class="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl"
  >
    <div class="flex flex-col items-center w-full mt-3">
      <div class="display-flex justify-start w-full mb-6 p-2">
        <a
          :href="'https://goerli.etherscan.io/address/' + item.addressFrom"
          target="_blank"
          rel="noreferrer"
        >
          <p class="text-white text-base">From: {{ item.addressFrom }}</p>
        </a>
        <a
          :href="'https://goerli.etherscan.io/address/' + item.addressTo"
          target="_blank"
          rel="noreferrer"
        >
          <p class="text-white text-base">To: {{ item.addressTo }}</p>
        </a>
        <p class="text-white text-base">Amount: {{ item.amount }} ETH</p>

        <br />
        <p class="text-white text-base">Message: {{ item.message }}</p>
      </div>
      <img
        src="gifUrl"
        alt="nature"
        class="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
      />
      <div class="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <p class="text-[#37c7da] font-bold">{{ item.timestamp }}</p>
      </div>
    </div>
  </div>
</template>
