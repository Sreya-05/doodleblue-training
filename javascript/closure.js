function Account(){
    let balance=1000;
    function Deposit(amount){
        balance=balance+amount
        console.log("BalanceAmount"+balance);
    }
    return Deposit;
}
const MyAccount=Account();
MyAccount(500);
MyAccount(700);