/**
 * @file 4byte-crawler
 * @summary crawls 4byte and saves output as json
 * @version v0.2.0
 * @license GPL-2-Only
 */

// const request = require("request");
const rp = require("request-promise-native");
const fs = require("fs-extra");


// @note helper to delay execution by 300ms to 1100ms
async function delay() {
  const durationMs = Math.random() * 800 + 300;
  return new Promise(resolve => {
    setTimeout(() => resolve(), durationMs);
  });
}
async function fetch4byteSignatures(signaturePage) {
  console.log(`Making API Request for ${signaturePage}...`);
  // @dev add the signaturePage to the URI and the Referer header
  // @note we could also have used the `qs` option for the query parameters.

  const results = await rp({
    uri: "https://www.4byte.directory/api/v1/signatures/?format=json&page=" +
      `${signaturePage}`,
    headers: {
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    },
    json: true
  });
  // save to disk with signaturePage as the file name
  await fs.promises.writeFile(
    `${signaturePage}.json`,
    JSON.stringify(results, null, 2)
  );
}
async function main() {
  // signaturePages 1, 2, 3, 4
  const signaturePages = require('./pages_index.json')
  /* const signaturePages = [9, 10, 11, 12, 13, 14]; */
   console.log("Starting script for 4byte pages", signaturePages);
  // @note make an API request for each page
  for (const signaturePage of signaturePages) {
    await fetch4byteSignatures(signaturePage);
    // interrupt the process so as to not get rate limited or banned
    await delay();
  }
  console.log("Crawl Task Completed");
}
main();
// @exports 4bytesCrawler 
