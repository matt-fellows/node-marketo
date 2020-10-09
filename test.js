let Marketo = require('./index');


const marketo = new Marketo({
    endpoint: 'https://979-GWU-366.mktorest.com/rest',
    identity: 'https://979-GWU-366.mktorest.com/identity',
    clientId: 'b5f74948-1d26-45a9-944f-df7e53025ad7',
    clientSecret: 'DMRiQn8yLxSUtqS2OtjvyvahS4jsgo8P'
});



// marketo.email.getEmails({maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     if (results.result.length == 200) {
//         console.log(results)
//     }
// })

marketo.emailTemplate.getTemplates({maxReturn : 200}).then(function (results) {
    console.log(results.result.length);
    marketo.emailTemplate.getTemplateContent(results.result[0].id).then(function(result2){
        console.log(result2)
    })
    
})

// marketo.landingPage.getLandingPages({maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     if (results.result.length == 200) {
//         console.log(results)
//     }
// })

// marketo.landingPageTemplate.getTemplates({maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     if (results.result.length == 200) {
//         console.log(results)
//     }
// })

// marketo.files.getFiles({maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     console.log(results)

//     if (results.result.length == 200) {
//        // console.log(results)
//     }
// })

// marketo.forms.getForms({maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     console.log(results)

//     if (results.result.length == 200) {
//        // console.log(results)
//     }
// })

// marketo.lead.describe({maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     console.log(results.result[0])

//     // if (results.result.length == 200) {
//     //    // console.log(results)
//     // }
// })


// marketo.smartList.getSmartLists({
//     maxReturn: 200
// }).then(function (results) {
//     console.log(results.result.length);
//     console.log(results.result[0])

//     if (results.result.length == 200) {
//         // console.log(results)
//     }
// })

// marketo.smartList.getSmartLists({
//     maxReturn: 200
// }).then(function (results) {
//     console.log(results.result.length);
//     console.log(results.result[0])
//     marketo
//         .smartList
//         .byId(results.result[0].id,{})
//         .then(function (result2) {
//             console.log("Hi")
//             console.log(result2.result[0].rules.filters[0].conditions)
//            // console.log(result2.rules[0].rules)

//     })
//     // if (results.result.length == 200) {
//     //    // console.log(results)
//     // }
// })



// marketo.lead.find("","",{maxReturn : 200}).then(function (results) {
//     console.log(results.result.length);
//     console.log(results.result[0])


// })




// marketo.users.getUsers({maxReturn : 200}).then(function (results) {
//     //console.log(results.result.length);
//     console.log(results.result)
// })

// marketo.forms.getForms({}).then(function(result) {
//     console.log(result.result[0]);
//     marketo.forms.getFormFields(result.result[0].id, {}).then(function(fieldResults) {
//         console.log(fieldResults.result);

//     })
// })