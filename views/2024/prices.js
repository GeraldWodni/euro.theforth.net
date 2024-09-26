// tagung.forth-ev.de price settings

module.exports = {
    conference: "EuroForth",
    year: "2024",
    currency: "£",
    registerButton: "Register",
    myName: "myEuroForth",
    operatorEmail: "jen@micross.co.uk",
    operatorBankAccount: "HINT: provided via environment variable",

    /* message to show after successful registration */
    successTemplate: function _successTemplate( { price } ) {
        return `Thank you for your registration!`
            + `\nPlease transfer £${price} to the bank account provided in your email.`
            //- + `\nIn the email you will find a personalized 'myEuroForth'-Link. Please bookmark it right away,`
            //- + `\nas this link allows you to participate electronically and to edit your presentation details.`
            + `\nYou will receive the email from: ${process.env.SMTP_EMAIL}.`;
    },
    /* registration email text body */
    emailTemplate: function _emailTemplate( { prices, values, price, website } ) {
        return `Hotel: ${values.hotel}\nExtra days: ${values.extraDays}\nPreis (total): ${price}`
            + ( price > 0 ? `\nPlease transfer the full amount in GBP to:\n${process.env.OPERATOR_BANK_ACCOUNT.replace(/\\n/g, '\n')}` : '' )
            + ( prices.chatRegistration ? `\n\n${process.env.CHAT_REGISTRATION}` : '' )
            + `\n\nTo edit your presentation details, please use the following link: https://${website}/${prices.myName}/${values.editHash}`
            + `\n\nName: ${values.name}`
            + `\nAddress: ${values.address}`
            + `\nTelephone: ${values.telephone}`
            + `\nEmail: ${values.email}`
            + `\n\nEntourage: ${values.partner}\nName: ${values.partnerName}\nAdresse: ${values.partnerAddress}`
            + `\n\nPresentation: ${values.presentationTitle} Length: ${values.presentationLength}\n${values.presentationDescription}`
            + `\n\nRemark: ${values.remark}`;
    },
    meeting: {
        openRegistration: "2024-05-13",
        enablePresentation: true,
        enablePartner: true,
        start: "2024-09-25",
    },
    hotels: [
        {
            header: "Forth standard meeting &  EuroForth conference (25.-29. September)",
            description: "Hotel with Breakfest, Meeting including Lunch",
            modes: [
                { name: "Single room:",                     value: "Std+EuroForth+SingleRoom",    complete: 610.00 },
                { name: "Double room:",                     value: "Std+EuroForth+DoubleRoom",    complete: 800.00 },
            ],
            extraDays: [
                { name: "24. Sep", value: "STD-1", single: 79, "double": 89 },
                { name: "29. Sep", value: "EF+1",  single: 79, "double": 89 },
                { name: "30. Sep", value: "EF+2",  single: 79, "double": 89 },
            ]
        },
        {
            header: "EuroForth conference only (27.-29. September)",
            description: "Hotel with Breakfest, Meeting including Lunch",
            modes: [
                { name: "Single room:",                     value: "EuroForth+SingleRoom",    complete: 320.00 },
                { name: "Double room:",                     value: "EuroForth+DoubleRoom",    complete: 430.00 },
            ],
            extraDays: [
                { name: "25. Sep", value: "EF-1", single: 79, "double": 89 },
                { name: "26. Sep", value: "EF+0", single: 79, "double": 89 },
                { name: "29. Sep", value: "EF+1", single: 79, "double": 89 },
                { name: "30. Sep", value: "EF+2", single: 79, "double": 89 },
            ]
        },
    ]
}
