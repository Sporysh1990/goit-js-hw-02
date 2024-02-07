function getShippingCost(country) { 
  
   let prise
    
    switch (country) {
        case "China":
            prise = 100;
            return `Shipping to ${country} will cost ${prise} credits`;
            break;
        case "Chile":
            prise = 250;
            return `Shipping to ${country} will cost ${prise} credits`;
            break;
        case "Australia":
            prise = 170;
             return `Shipping to ${country} will cost ${prise} credits`;
            break;
        case "Jamaica":
            prise = 120;
            return `Shipping to ${country} will cost ${prise} credits`;
        default:
            return `Sorry, there is no delivery to your country`

    }
    
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


