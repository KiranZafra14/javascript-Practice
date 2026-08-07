function createCryptoWallet(initialBalance){
    let balance=initialBalance;
    return{
        deposit(amount){
            balance += amount;
        },
        withdraw(amount){
            if(amount>balance){
                return "Transaction Failed: Insufficient funds.";
            }
            else{
                balance -= amount;
                return balance;
            }
        },
        walletbalance(){
            return balance;
        }
    };
}

let wallet=createCryptoWallet(2.5);
wallet.deposit(1.2);
console.log(wallet.walletbalance());
console.log(wallet.withdraw(5));
console.log(wallet.withdraw(1.5));
