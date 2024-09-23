const Navbar = elementById("navbar");
const Nav = elementById('nav');
const historyBtn = elementById('historyBtn');
const history = elementById('history');
const DonationBtn = elementById('donationBtn');
const Donation = elementById('donation');

// Navbar sticy functionality
window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        Navbar.classList.add('bg-opacity-40')
        Nav.classList.add("backdrop-blur-md")
    }else{
        Navbar.classList.remove('bg-opacity-40');
        Nav.classList.remove("backdrop-blur-md")
    }
})

// Donation and History Button Functionality

historyBtn.addEventListener('click',function(){
    historyBtn.classList.add(
        "bg-blogBtn",
        "font-bold"
    )
    historyBtn.classList.remove(
        "font-medium",
        "text-gray-500"
    )

    DonationBtn.classList.add(
        "font-medium",
        "text-gray-500"
    )

    DonationBtn.classList.remove(
        "bg-blogBtn",
        "font-bold"
    )

    history.classList.toggle("hidden")
    Donation.classList.toggle("hidden")
})

DonationBtn.addEventListener('click',function(){
    historyBtn.classList.remove(
        "bg-blogBtn",
        "font-bold"
    )

    historyBtn.classList.add(
        "font-medium",
        "text-gray-500"
    )

    DonationBtn.classList.remove(
        "font-medium",
        "text-gray-500"
    )

    DonationBtn.classList.add(
        "bg-blogBtn",
        "font-bold"
    )

    history.classList.toggle( "hidden")
    Donation.classList.toggle( "hidden")
})




const donateBtn = elementById("donateBtn");
donateBtn.addEventListener('click',function(){
    donateNow("currentBalance","donationBalance"," Flood at Noakhali, Bangladesh")
})

const donateBtn2 = elementById("donateBtn2");
donateBtn2.addEventListener('click',function(){
    donateNow("currentBalance2","donationBalance2","Flood Relief in Feni,Bangladesh")
})

const donateBtn3 = elementById("donateBtn3");
donateBtn3.addEventListener('click',function(){
    donateNow("currentBalance3","donationBalance3","Aid for Injured in the Quota Movement")
})


