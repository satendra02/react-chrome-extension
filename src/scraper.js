const getMerchantJson = async () => {
    const response = await fetch('https://cdn1.affirm.com/platform/public/merchants/merchants.json.gz');

    return response.json();
};


const getMerchantMordorPageDoc = async (url) => {
    const response = await fetch(url);
    const responseHtml = await response.text();

    // Initialize the DOM parser
    const parser = new DOMParser();

    // Parse response text
    const doc = await parser.parseFromString(responseHtml, "text/html");

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    // const docArticle = doc.querySelector('article').innerHTML;
    return doc;
};


const standardizeUrlFormat = (url) => {
    const httpPrefix = 'http://';
    const httpsPrefix = 'https://';

    if (url.startsWith(httpPrefix)) {
        return url.slice(httpPrefix.length);
    }
    if (url.startsWith(httpsPrefix)) {
        return url.slice(httpsPrefix.length);
    }
    return url;
};


// main

console.log('-------- Retrieving Merchant JSON --------');

const data = await getMerchantJson();
console.log({ data })

console.log('-------- Retrieving Merchant Domain Data from Mordor --------');
const merchantJSONWithDomain = [];
let processedCount = 1;

for (merchant of data) {
    const merchantAri = merchant.ari;
    const merchantMordorUrl = `https://www.affirm.com/mordor/debugapp/merchants/${merchantAri}/`;
    const mordorPageDoc = await getMerchantMordorPageDoc(merchantMordorUrl);

    const merchantDomain = mordorPageDoc.querySelector('input[id="domain"]').value;
    const standardizedMerchantDomain = standardizeUrlFormat(merchantDomain);

    const merchantDataWithDomain = { ...merchant, domain: standardizedMerchantDomain };
    merchantJSONWithDomain.push(merchantDataWithDomain);

    console.log(`Processed ${processedCount} merchants:\t${merchant.ari}\t${merchant.name}\t\t\t${standardizedMerchantDomain}`);

    if (processedCount % 100 === 0) {
        console.log(merchantJSONWithDomain);
    }

    processedCount += 1;
}

console.log('-------- Processing Complete! --------');

console.log(merchantJSONWithDomain);

