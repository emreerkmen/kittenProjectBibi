const ADVERT = require('../models/AdvertModel')

module.exports = {
    createAdvert: async (done) => {
        const gig = ADVERT({
            owner: "5fd8f9375644ec42a05e863f",
            title: "Developer",
            category: "Web Development",
            about:"I can design and develop your website",
            price: 5,
            picture:"https://lh3.googleusercontent.com/ogw/ADGmqu-Z2CJscEKAZuKCIqH7sh_tLDOBbUTGxVILvrYVCeE=s32-c-mo"
        })
        await gig.save(function(err, data) {
            if (err) {console.log(err)}
            console.log(data)
        })
        return gig
    }



}