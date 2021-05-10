// const levenshtein = require('fast-levenshtein');


// export const proxy = (resonseJson, city) => {
//     const target = {
//         responseJson: `${resonseJson.name}`
//     }
    
//     const handler = {
//         get(obj, prop) {
//             if(prop in obj) {
//                 return obj[prop]
//             }
    
//             const suggestion = Object.keys(obj).find(key => {
//                 levenshtein.get(key, prop) <= 3
//             })
    
//             if(suggestion) {
//                 console.log(`${prop} no se encontro. quisiste decir ${suggestion}`)
//             }
    
//             return obj[prop];
//         }
//     }
// }

// const newSuggestion = new Proxy(proxy.target, proxy.handler);