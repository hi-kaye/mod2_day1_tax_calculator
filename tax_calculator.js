const twenty_percent = 0.2
const fourty_percent = 0.4
const fourty_five_percent = 0.45

function calcNetPay(pay) {
    check_number = validateValue(pay)

    if(pay == null || pay === 0 || !check_number || isNaN(pay)) {
        return "Enter valid amount"
    }
    else if(pay <= 37500) {
        tax = (pay * twenty_percent).toFixed(2)
        net_pay = (pay - tax).toFixed(2)
        return {
            "tax" : `${tax}`,
            "net_pay" : `${net_pay}`
        }
    }
    else if(pay <= 15000) {
        tax = (pay * fourty_percent).toFixed(2)
        net_pay = (pay - tax).toFixed(2)
        return {
            "tax" : `${tax}`,
            "net_pay" : `${net_pay}`
        }
    }
    else {
        tax = (pay * fourty_five_percent).toFixed(2)
        net_pay = (pay - tax).toFixed(2)
        return {
            "tax" : `${tax}`,
            "net_pay" : `${net_pay}`
        }
    }
}

function validateValue(pay){
    let regex = new RegExp('^\-?[0-9]+(?:\.[0-9]{1,2})?$')
    let check = regex.test(pay)
    if (check) {
        return true
    }
    else {
        return false
    }
}

console.log(calcNetPay(100000))
