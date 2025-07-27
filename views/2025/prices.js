// tagung.forth-ev.de price settings

module.exports = {
    conference: "EuroForth",
    year: "2025",
    currency: "€",
    registerButton: "Register",
    myName: "myEuroForth",
    operatorEmail: "uho@xlerb.de",
    operatorBankAccount: "HINT: provided via environment variable",

    /* message to show after successful registration */
    successTemplate: function _successTemplate( { price } ) {
        return `Thank you for your registration!`
            + `\nPlease transfer €${price} to the bank account provided in your email.`
            //- + `\nIn the email you will find a personalized 'myEuroForth'-Link. Please bookmark it right away,`
            //- + `\nas this link allows you to participate electronically and to edit your presentation details.`
            + `\nYou will receive the email from: ${process.env.SMTP_EMAIL}.`;
    },
    /* registration email text body */
    emailTemplate: function _emailTemplate( { prices, values, price, website } ) {
        return `Hotel: ${values.hotel}\nExtra days: ${values.extraDays}\nPreis (total): ${price}`
            + ( price > 0 ? `\nPlease transfer the full amount in EUR to:\n${process.env.OPERATOR_BANK_ACCOUNT.replace(/\\n/g, '\n')}` : '' )
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
        openRegistration: "2025-07-27",
        enablePresentation: true,
        enablePartner: true,
        start: "2025-09-12",
    },
    hotels: [
        {
            header: "Forth standard meeting &  EuroForth conference (10.-14. September)",
            description: "Hotel with Breakfest, Meeting including Lunch",
            modes: [
                { name: "Single room:",                     value: "Std+EuroForth+SingleRoom",    complete: 1030.00 },
                { name: "Double room:",                     value: "Std+EuroForth+DoubleRoom",    complete: 1130.00 },
            ],
            extraDays: [
                { name: "09. Sep", value: "STD-1", single: 175, "double": 200 },
                { name: "15. Sep", value: "EF+1",  single: 110, "double": 135 },
                { name: "16. Sep", value: "EF+2",  single: 110, "double": 135 },
            ]
        },
        {
            header: "EuroForth conference only (12.-14. September)",
            description: "Hotel with Breakfest, Meeting including Lunch",
            modes: [
                { name: "Single room:",                     value: "EuroForth+SingleRoom",    complete: 490.00 },
                { name: "Double room:",                     value: "EuroForth+DoubleRoom",    complete: 540.00 },
            ],
            extraDays: [
                { name: "09. Sep", value: "EF-3", single: 175, "double": 200 },
                { name: "10. Sep", value: "EF-2", single: 175, "double": 200 },
                { name: "11. Sep", value: "EF-1", single: 175, "double": 200 },
                { name: "15. Sep", value: "EF+1", single: 110, "double": 135 },
                { name: "16. Sep", value: "EF+2", single: 110, "double": 135 },
            ]
        },
    ]
}
