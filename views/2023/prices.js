// tagung.forth-ev.de price settings

module.exports = {
    conference: "EuroForth",
    year: "2023",
    registerButton: "Register",
    myName: "myEuroForth",
    operatorEmail: "gerald.wodni@gmail.com",
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
            + ( price > 0 ? `\nPlease transfer the full amount in Euro to:\n${process.env.OPERATOR_BANK_ACCOUNT.replace(/\\n/g, '\n')}` : '' )
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
        openRegistration: "2023-06-15",
        enablePresentation: true,
        enablePartner: true,
        start: "2023-09-02",
    },
    hotels: [
        {
            header: "Forth standard meeting &  EuroForth conference (13.-17. September)",
            description: "Hotel with Breakfest, Meeting including Lunch",
            modes: [
                { name: "Single room:",                     value: "Std+EuroForth+Single",    complete: 653.40 },
                { name: "Double room:",                     value: "Std+EuroForth+Double",    complete: 763.40 },
            ]
        },
        {
            header: "EuroForth conference only (15.-17. September) with VAT",
            description: "Hotel with Breakfest, Meeting including Lunch",
            modes: [
                { name: "Single room:",                     value: "EuroForth+Single+VAT",    complete: 385.00 },
                { name: "Double room:",                     value: "EuroForth+Double+VAT",    complete: 440.00 },
            ]
        },
    ]
}
