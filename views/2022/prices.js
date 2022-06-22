// euro.theforth.net price settings

module.exports = {
    conference: "EuroForth",
    year: "2022",
    registerButton: "Register",
    myName: "myEuroForth",
    operatorEmail: "gerald.wodni@gmail.com",
    operatorBankAccount: "HINT: provided via environment variable",
    chatRegistration: "HINT: provided via environment variable",

    /* message to show after successful registration */
    successTemplate: function _successTemplate( { price } ) {
        return `Thank you for your registration!`
            //+ `\nPlease transfer €${price} to the bank account provided in your email - see special COVID19 instructions on the website.`
            + `\nIn the email you will find a personalized 'myEuroForth'-Link. Please bookmark it right away,`
            + `\nas this link allows you to participate electronically and to edit your presentation details.`
            + `\nYou will receive the email from: ${process.env.SMTP_EMAIL}.`;
    },
    /* registration email text body */
    emailTemplate: function _emailTemplate( { prices, values, price, website } ) {
        return `Hotel: ${values.hotel}\nExtra days: ${values.extraDays}\nPreis (total): ${price}`
            + ( price > 0 ? `\nPlease transfer the full amount in Euro to:\n${prices.operatorBankAccount}` : '' )
            + ( prices.chatRegistration ? `\n\n${process.env.CHAT_REGISTRATION}` : '' )
            + `\n\nTo attend the conference electronically, and to edit your presentation details, please use the following link: https://${website}/${prices.myName}/${values.editHash}`
            + `\n\nName: ${values.name}`
            //+ `\nAddress: ${values.address}`
            //+ `\nTelephone: ${values.telephone}`
            + `\nEmail: ${values.email}`
            //+ `\n\nEntourage: ${values.partner}\nName: ${values.partnerName}\nAdresse: ${values.partnerAddress}`
            + `\n\nPresentation: ${values.presentationTitle} Length: ${values.presentationLength}\n${values.presentationDescription}`
            + `\n\nRemark: ${values.remark}`;
    },
    meeting: {
        openRegistration: "2022-08-26",
        start: "2022-09-02"
    },
    hotels: [
        {
            header: "Online Only - EuroForth conference only (4.-6. September)",
            description: "Please read the COVID 19 section before using this option.",
            modes: [
                { name: "Single person:",                     value: "EuroForth+Online",    complete: 0.00 },
            ]
        },
        {
            header: "Online Only - Forth standard meeting &  EuroForth conference (1.-6. September)",
            description: "Please read the COVID 19 section before using this option.",
            modes: [
                { name: "Single person:",                     value: "STD+EuroForth+Online",    complete: 0.00 },
            ]
        }
    ]
}
