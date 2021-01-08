import merchantData from "./merchantJSONWithDomain";

// Retrieve DOM nodes containing URL ending in '.com'
const getResultsWithProbableURL = () => {
  // Find elements containing search result URLs. In this case, Google uses "cite" elements
  const cites = document.querySelectorAll("cite");
  // Output format { merchantDomain: node }
  const candidateSearchResultByMerchantDomain = {};

  for (let cite of cites) {
    const indexOfDotCom = cite.innerText.indexOf('.com');

    // Only include URLs of merchant landing pages
    if (indexOfDotCom !== -1) {
      const originalURL = cite.innerText.slice(0, indexOfDotCom + 4);
      Object.assign(
        candidateSearchResultByMerchantDomain,
        { [originalURL]: cite }
      );

      // To help with matching against domain in Affirm's merchant JSON file,
      // also include a duplicate entry with prepended 'www.' if not already exist
      if (!originalURL.startsWith('www.')) {
        const urlWithWWW = `www.${originalURL}`;
        Object.assign(
          candidateSearchResultByMerchantDomain,
          { [urlWithWWW]: cite }
        );
      }
    }
  }

  return candidateSearchResultByMerchantDomain;
};

// Highlight Affirm merchants in Google search results
export const highlightAffirmMerchantsInGoogleSearch = () => {
    if (document.URL.startsWith('https://www.google.com/search?')) {
      const searchResultByMerchantDomain = getResultsWithProbableURL();
      const searchResultMerchantDomainSet = new Set(
        Object.keys(searchResultByMerchantDomain)
      );

      const matchedMerchantDataByDomain = {};
      // Iterate through merchants JSON to find merchants with matching domain
      for (let merchant of merchantData) {
        if (searchResultMerchantDomainSet.has(merchant.domain)) {
          Object.assign(
            matchedMerchantDataByDomain,
            { [merchant.domain]: merchant },
          );
        }
     }

      // Inject Affirm pin before each Affirm Merchant in search result
      for (let matchedMerchantDomain of Object.keys(matchedMerchantDataByDomain)) {
        const searchResultTitle = searchResultByMerchantDomain[matchedMerchantDomain]
          .parentElement
          .parentElement
          .parentElement
          .parentElement;
        const searchResultTitleContainer = searchResultTitle.parentElement;
        const buyWithAffirmPin = document.createElement('div');
        buyWithAffirmPin.innerHTML = 'Shop Now With Your $4000 Prequalified Funds from Affirm';
        buyWithAffirmPin.style = 'color: green';
        searchResultTitleContainer.insertBefore(buyWithAffirmPin, searchResultTitle);
      }
    }
};

export const isAffirmMerchant = () => {
  const url = document.location.host;
  for (let merchant of merchantData) {
    if (url === merchant.domain){
      return true;
    }
  }
  return false;
};

export const AffirmMerchantMetaData = () => {
  const url = document.location.host;
  for (let merchant of merchantData) {
    if (url.toLowerCase() === merchant.domain.toLowerCase()){
      return merchant;
    }
  }
  return {};
};
