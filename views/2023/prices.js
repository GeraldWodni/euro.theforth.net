// tagung.forth-ev.de price settings

module.exports = {
    conference: "EuroForth",
    year: 2023,
    registerButton: "Register",
    myName: "myEuroForth",
    operatorEmail: "gerald.wodni@gmail.com",
    operatorBankAccount: "HINT: provided via environment variable",
    chatRegistration: "HINT: provided via environment variable",
    meeting: {
        openRegistration: "2023-06-15",
        enablePartner: true,
        start: "2023-09-02",
    },
    hotels: [
        {
            header: "Forth standard meeting &  EuroForth conference (13.-17. September) with VAT",
            description: "Choose this if you are a private traveller in the EU and cannot provide a VAT-ID, or if you live in Austria",
            modes: [
                { name: "Single room:",                     value: "Std+EuroForth+Single+VAT",    complete: 712.80 },
                { name: "Double room:",                     value: "Std+EuroForth+Double+VAT",    complete: 832.80 },
            ]
        },
        {
            header: "Forth standard meeting &  EuroForth conference (13.-17. September) without VAT",
            description: "Choose this if you are a business in the EU and can provide a VAT-ID or if you are outside of the EU",
            modes: [
                { name: "Single room:",                     value: "Std+EuroForth+Single+NET",    complete: 594.00 },
                { name: "Double room:",                     value: "Std+EuroForth+Double+NET",    complete: 694.00 },
            ]
        },
        {
            header: "EuroForth conference only (15.-17. September) with VAT",
            description: "Choose this if you are a private traveller in the EU and cannot provide a VAT-ID, or if you live in Austria",
            modes: [
                { name: "Single room:",                     value: "EuroForth+Single+VAT",    complete: 420.00 },
                { name: "Double room:",                     value: "EuroForth+Double+VAT",    complete: 480.00 },
            ]
        },
        {
            header: "EuroForth conference only (15.-17. September) without VAT",
            description: "Choose this if you are a business in the EU and can provide a VAT-ID or if you are outside of the EU",
            modes: [
                { name: "Single room:",                     value: "EuroForth+Single+NET",    complete: 350.00 },
                { name: "Double room:",                     value: "EuroForth+Double+NET",    complete: 400.00 },
            ]
        },
    ]
}
