var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var mkr = document.getElementById("maker");
var ltc = document.getElementById("litecoin");
var sol = document.getElementById("solana");
var avax = document.getElementById("avalanche");
var dot = document.getElementById("polkadot");
var usdt = document.getElementById("tether");
var doge = document.getElementById("dogecoin");

var liveprice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cmaker%2Clitecoin%2Csolana%2Cavalanche%2Cpolkadot%2Ctether%2Cdogecoin%2Ctron&vs_currencies=usd",

  method: "GET",
  headers: {},
};

$.ajax(liveprice).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  mkr.innerHTML = response.maker.usd;
  ltc.innerHTML = response.litecoin.usd;
  sol.innerHTML = response.solana.usd;
  avax.innerHTML = response.avalanche.usd;
  dot.innerHTML = response.polkadot.usd;
  usdt.innerHTML = response.tether.usd;
  doge.innerHTML = response.dogecoin.usd;
});
