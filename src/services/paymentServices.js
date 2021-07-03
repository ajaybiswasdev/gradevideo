var braintree = require('braintree-web');

function braintainService(braintreeKey, cardDetail) {
  console.log("======braintreeKey======", braintreeKey)
  console.log("======cardDetail======", cardDetail)
  return new Promise((resolve, reject) => {
    braintree.client.create({
      authorization: braintreeKey
    }, function (err, client) {
      client.request({
        endpoint: 'payment_methods/credit_cards',
        method: 'post',
        data: {
          creditCard: {
            number: cardDetail.card_number,
            expirationDate: `${cardDetail.month}/${cardDetail.year}`,
            cvv: cardDetail.cvv2,
            billingAddress: {
              postalCode: cardDetail.zip_code
            }
          }
        }
      }, function (err, response) {
        // Send response.creditCards[0].nonce to your server
        console.log("==err=", err)
        console.log("==response=", response)
        if(response && response.creditCards[0].nonce) {
            var nonce = response.creditCards[0].nonce;
            resolve(nonce);
        } else {
          reject(err)
        }
      });
    });
  })
}

export {
  braintainService
};
