'use strict';
const main = document.querySelector('.main');
const tokenName = document.querySelector('.token-name');
const tokenPrice = document.querySelector('.token-price');
const tokenPercentage = document.querySelector('.token-percent');
const tokenTotalVolume = document.querySelector('.token-total-volume');
const token = document.querySelector('.token');


// congecko api key  CG-UTHi5yVk9BSesXkGUErUzSPr
token.innerHTML = "";
const requestApi = async function(){
    try {

    
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=
        bitcoin,dogecoin,ethereum,tether,bnb,solana,
        usdc,xrp,toncoin,tron,cardano,avalanche,
        weth,shiba inu,chainlink,sui,uniswap,litecoin,
        kaspa,bittensor,aptos,pepe,monero,aave,
        ondo,zksync, ethena       
        &x_cg_demo_api_key=CG-UTHi5yVk9BSesXkGUErUzSPr`);
    const datas =  await res.json();
    
    datas.sort((a,b) => (a.total_volume) - (b.total_volume));
    console.log(datas);
   
    datas.forEach(data => {
        const type = data.price_change_percentage_24h > 0.3 ? 'colorChange-1': data.price_change_percentage_24h < 0 ? 
        'colorChange-2': data.price_change_percentage_24h <=0.3 ? 'colorChange-3' : 'teal';
  
             

       const html = `
       
    
        <div class = "token-data ${type} ">
            <p class = "token-name ">${data.name}</p>
            <p class = "token-price ">$ ${data.current_price}</p>
            <p class = "token-percent">${data.price_change_percentage_24h}%</p>
            <p class ="token-total-volume">TOTAL VOL. $ ${data.total_volume}</p>
        </div>
    
    
  
       ` 
       token.insertAdjacentHTML('afterbegin', html);

    });
    } catch (err){
        alert(err);
    }
    
    
    
        
       }
   
  
requestApi();

console.log("I got clicked");

