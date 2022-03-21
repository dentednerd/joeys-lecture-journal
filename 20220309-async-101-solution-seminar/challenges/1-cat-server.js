const request = require('../utils/server');

function checkServerStatus(cb) {
  request('/status', (err, data) => {
    if (err) throw new Error;
    cb(null, data);
  })
}
function fetchBannerContent(cb) {
  request('/banner', (err, data) => {
    if (err) throw new Error;
    cb(null, { ...data, copyrightYear: 2021 });
  })
}

function fetchAllOwners(cb) {
  request('/owners', (err, data) => {
    const lowercaseOwners = data.map((owner)=> {
      return owner.toLowerCase();
    })
    cb(null, lowercaseOwners);
  })
}

function fetchCatsByOwner(owner, cb) {
  request(`/owners/${owner}/cats`, (err, data) => {
    if (err) {
      cb(`404 - ${owner} not found`, null);
    } else {
      cb(null, data);
    }
  })
}

function fetchCatPics(catsArray, cb) {
  if (catsArray.length === 0) {
    cb(null);
  }
  const catPics = [];
  catsArray.forEach((cat) => {
    return request(`/pics/${cat}`, (err, catPic) => {
      if (err) {
        catPics.push('placeholder.jpg');
      } else {
        catPics.push(catPic);
      }
      if (catPics.length === catsArray.length) {
        cb(null, catPics);
      }
    });
  });

}
function fetchAllCats(cb) {
  const allCats = [];
  fetchAllOwners((err, owners) => {
    if (err) throw new Error;
    owners.forEach(owner => {
      fetchCatsByOwner(owner, (err, catsByOwner) => {
        if (err) throw new Error;
        allCats.push(catsByOwner);
        if (allCats.length === owners.length) {
          const sortedCats = allCats.flat().sort();
          cb(null, sortedCats);
        }
      });
    })
  });

}

function fetchOwnersWithCats(cb) {
  const result = [];
  let counter = 0;

  fetchAllOwners((err, owners) => {
    if (err) {
      throw new Error;
    } else {
      owners.forEach((owner, index) => {
        fetchCatsByOwner(owner, (err, cats) => {
          if (err) {
            throw new Error;
          } else {
            result[index] = { owner, cats };
            if (++counter === owners.length) {
              cb(null, result);
            };
          };
        });
      });
    };
  });
};

function kickLegacyServerUntilItWorks(cb) {
  request('/legacy-status', (err, status) => {
    if (err) {
      kickLegacyServerUntilItWorks(cb);
    } else {
      cb(null, status);
    }
  })
}
function buySingleOutfit(outfit, cb) {
  let ableToCheckout = true;
  request(`/outfits/${outfit}`, (err, checkout) => {
    if (err) {
      cb(err);
    } else {
      if (ableToCheckout) {
        cb(null, checkout);
        ableToCheckout = false;
      }
    }
  })
}
module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner
};
