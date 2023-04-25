console.log("Instrument of Surrender") //Confirm JS running

//Defining page elements as variables
const firstCurrency = document.getElementById("firstAmount")
const DOMfirstOptions = document.getElementsByName("currency1")
const DOMsecondOptions = document.getElementsByName("currency2")
const resultTextBox = document.getElementById("result")

//Defining conversion rates. Maybe one day I'll make them actually update automatically, which is why having all these as individual variables would be helpful.
const USDtoUSD = 1
const USDtoPounds = 0.8
const USDtoYen = 134.19
const PoundstoPounds = 1
const PoundstoUSD = 1.25
const PoundstoYen = 167.49
const YentoYen = 1
const YentoUSD = 0.0075
const YentoPounds = 0.006
const USDConversions = [USDtoUSD, USDtoPounds, USDtoYen, "$"]
const PoundsConversions = [PoundstoUSD, PoundstoPounds, PoundstoYen, "£"]
const YenConversions = [YentoUSD, YentoPounds, YentoYen, "¥"]
const allConversions = [USDConversions, PoundsConversions, YenConversions]


const submit = function() { //called when user hits the submit button
    let conversionNumber = parseFloat(firstCurrency.value); //get input
    let rawNumber = convert(conversionNumber, determineConversionRate()) //conversion muliplication
    let finalNumber = ((Math.round((rawNumber)*100)/100).toFixed(2)) //round to 2 decimals
    let finalString = (allConversions[checkSign()][3]) + finalNumber //add currency symbol
    if (Number.isNaN(conversionNumber) == false) {
        resultTextBox.innerHTML = finalString
    } else {
        resultTextBox.innerHTML = "Please enter a number!"
    }
    
}

const determineConversionRate = function() {
    let firstOption = -1
    let secondOption = -1
    //Find which option is checked for first currency
    for(let i=0;i<DOMfirstOptions.length;i++) {
        if(DOMfirstOptions[i].checked) {
            firstOption = i
            break
        }
    }
    //Same thing for conversion target
    for(let i=0; i<DOMsecondOptions.length;i++) {
        if(DOMsecondOptions[i].checked) {
            secondOption = i
            break
        }
    }
    //Return the conversion rate
    return allConversions[firstOption][secondOption]
}

const convert = function(amount, conversionRate) {
    return amount*conversionRate
}

const checkSign = function() {
    for(let i=0;i<DOMsecondOptions.length;i++) {
        if(DOMsecondOptions[i].checked) {
            return i
        }
    }
}