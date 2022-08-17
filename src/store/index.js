import { createStore } from "vuex";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

const store = createStore({
  modules: {},
  state: {
    connectedAccount: "Address",
    isLoading: false,
    transactionCount: localStorage.getItem("transactionCount"),
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  },
  mutations: {
    SetAccount(state, account) {
      state.connectedAccount = account;
    },
    setFormData(state, payload) {
      state.addressTo = payload.addressTo;
      state.amount = payload.amount;
      state.keyword = payload.keyword;
      state.message = payload.message;
    },
  },
  actions: {
    checkIfWalletIsConnect: async ({ commit }) => {
      try {
        if (!ethereum) return alert("Please install MetaMask.");

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length) {
          commit("SetAccount", await accounts[0]);
          console.log(accounts[0]);

          // getAllTransactions();
        } else {
          console.log("No accounts found");
        }
      } catch (error) {
        console.log(error);
      }
    },

    connectWallet: async ({ commit }) => {
      try {
        if (!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        commit("SetAccount", await accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.log("error");
        throw new Error("No ethereum object.");
      }
    },

    sendTransactions: async ({ state }) => {
      // try {
      if (!ethereum) return alert("Please install metamask");

      let provider = new ethers.providers.Web3Provider(ethereum);
      let signer = provider.getSigner();
      let transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      console.log({
        provider,
        signer,
        transactionContract,
      });

      const parsedAmount = ethers.utils.parseEther(state.amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: state.connectedAccount,
            to: state.addressTo,
            gas: "0x5208", // 21000 gwei
            value: parsedAmount._hex, // 0.0001
            // ._hex
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        state.addressTo,
        parsedAmount,
        state.message,
        state.keyword
      );

      state.isLoading = true;

      console.log("Loading -", transactionHash);

      await transactionHash.wait();

      state.isLoading = false;

      console.log("Success -", transactionHash);

      state.transactionCount = await transactionContract
        .getTransactionCount()
        .toNumber();
      // } catch (error) {
      //   console.log("error");
      //   throw new Error("No ethereum object.");
      // }
    },
  },
  getters: {
    getConnectedAccount(state) {
      let s = state.connectedAccount;
      if (s.length == 42) {
        return s.slice(0, 7).concat(".......").concat(s.slice(36, 42));
      } else {
        return s;
      }
    },
    //   getAllTransactions = async () => {
    //   try {
    //     if (ethereum) {
    //       const transactionsContract = createEthereumContract();

    //       const availableTransactions = await transactionsContract.getAllTransactions();

    //       const structuredTransactions = availableTransactions.map((transaction) => ({
    //         addressTo: transaction.receiver,
    //         addressFrom: transaction.sender,
    //         timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
    //         message: transaction.message,
    //         keyword: transaction.keyword,
    //         amount: parseInt(transaction.amount._hex) / (10 ** 18)
    //       }));

    //       console.log(structuredTransactions);

    //       setTransactions(structuredTransactions);
    //     } else {
    //       console.log("Ethereum is not present");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },
});

export default store;
