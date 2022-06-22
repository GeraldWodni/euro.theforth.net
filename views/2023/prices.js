// tagung.forth-ev.de price settings

module.exports = {
    year: 2022,
    operatorEmail: "gerald.wodni@gmail.com",
    operatorBankAccount: "No Bank Account",
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
