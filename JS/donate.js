function donateNow(currentBalancePara,donationBalancePara, title){
    const donationBalance = elementById(donationBalancePara);
    const currentBalance = elementById(currentBalancePara);
    const mainBalance = elementById("mainBalance");

    const donationBalanceValue = parseFloat(donationBalance.value);
    const mainBalanceValue = parseFloat(mainBalance.innerText);
    const currentBalanceValue = parseFloat(currentBalance.innerText);
    const currentMainBalance = mainBalanceValue - donationBalanceValue;

    if(isNaN(donationBalanceValue)){
        alert("Invalid Dontation Amount..!");
        return;
    } if(donationBalanceValue > mainBalanceValue) {
        alert("Balance Is Low");
        return;
    } if(donationBalanceValue < 0){
        alert("You can't Donate a negative Value");
        return;
    }

    mainBalance.innerText = currentMainBalance;
    const currentTotallBalance = donationBalanceValue + currentBalanceValue;
    currentBalance.innerText = currentTotallBalance;
    
    my_modal_2.showModal()

    const historyArea = elementById("history");
    historyArea.innerHTML += `<div class="border my-3 py-6 px-8 rounded-lg">
        <div class="font-bold pb-2">
          ${donationBalanceValue} Taka is Donated for ${title}
        </div>
        <div class="text-gray-500 ">Date : ${new Date()}</div>
      </div>`
}