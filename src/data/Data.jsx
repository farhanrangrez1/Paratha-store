

const data = {
  "biscuits": [
    {
      "id": 1,
      "description": "Cookise & Ceram Cheesecake Core",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "198.00",
      "image": "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Cookies%20%26%20Cream%20Cheesecake%20Core/cookies-and-cream-cheesecake-2022-landing-open.png"
    },
    {
      "id": 2,
      "description": "Crumbl Bakes Frid ice Cream Cookies ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "99.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzzmASJ505Q4QHyCdzdCbS2zy08cjWLdYNg&usqp=CAU",
      count: 1
    },
    {
      "id": 3,
      "description": "Cookies & Cream ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "222.00",
      "image": "https://connoisseuricecream.com.au/wp-content/uploads/2021/06/Connoisseur_AvailableIn_Thumbnail_Cookies_Cream_LP-600x600.png",
      count : 1
    },


    {
      "id": 5,
      "name": "Shortbread",
      "description": "A delicate biscuit with a buttery flavor.",
      "ingredients": ["flour", "sugar", "butter"],
      "price": 1.79,
      "image": "https://www.janespatisserie.com/wp-content/uploads/2019/01/IMG_3388-scaled.jpg",
      count : 1
    },
    {
      "id": 6,
      "name": "Peanut Butter",
      "description": "A sweet and salty biscuit made with peanut butter.",
      "ingredients": ["flour", "sugar", "butter", "peanut butter"],
      "price": 2.29,
      "image": "https://m.media-amazon.com/images/I/9148NkRCVlL._SX569_.jpg",
      count : 1
    },
    {
      "id": 7,
      "name": "Almond",
      "description": "A crunchy biscuit with chopped almonds.",
      "ingredients": ["flour", "sugar", "butter", "almonds"],
      "price": 2.99,
      "image": "https://www.jiomart.com/images/product/600x600/rvzi9nbw1u/nuttz-bites-oreo-almonds-badam-250g-product-images-orvzi9nbw1u-p590998273-3-202201121409.jpg",
      count : 1
    },
    {
      "id": 8,
      "name": "Coconut",
      "description": "A tropical biscuit made with shredded coconut.",
      "ingredients": ["flour", "sugar", "butter", "coconut"],
      "price": 2.79,
      "image": "https://m.media-amazon.com/images/I/31IBimGlG5L._SL500_.jpg",
      count : 1
    },
    {
      "id": 9,
      "name": "Gingerbread",
      "description": "Cookise cream",
      "ingredients": ["flour", "sugar", "butter", "ginger", "molasses"],
      "price": 2.49,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGyJqqlsABKMXHpXTXYnV_uNUUCgJ4DtsRw&usqp=CAU",

    },
    // {
    //   "id": 10,
    //   "name": "Maple Pecan",
    //   "description": "A nutty biscuit made with maple syrup and pecans.",
    //   "ingredients": ["flour", "sugar", "butter", "maple syrup", "pecans"],
    //   "price": 3.29,
    //   "image": "https://s41230.pcdn.co/wp-content/uploads/2019/08/vegan-plant-based-news-oreos-maple-creme.jpg"
    // },
    {
      "id": 11,
      "name": "Lemon",
      "description": "A tangy biscuit made with fresh lemon juice and zest.",
      "ingredients": ["flour", "sugar", "butter", "lemon juice", "lemon zest"],
      "price": 2.79,
      "image": "https://res.cloudinary.com/droneup-llc/image/fetch/f_auto/https://i5.walmartimages.com/asr/9b75379f-2901-4a25-b4b9-9afa8c282980.8b9b74ed68bb923d863d52563b293970.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
      count : 1
    },
    // {
    //       "id": 12,
    //       "name": "Classic",
    //       "description": "The original Oreo biscuit with a creamy filling sandwiched between two chocolate cookies.",
    //       "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
    //       "price": 1.99,
    //       "image": "https://www.oreo.com/media/catalog/product/cache/e95618f36a44fdfd08c1d13eb64bc814/0/0/00044000069940_u1c1.jpg"
    //     },
    // {
    //   "id": 13,
    //   "name": "Double Stuf",
    //   "description": "Double the amount of creamy filling between two chocolate cookies.",
    //   "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
    //   "price": 2.49,
    //   "image": "https://www.bigbasket.com/media/uploads/p/m/40192010-2_7-cadbury-oreo-double-stuf-creme-biscuit.jpg"
    // },
    // {
    //   "id": 14,
    //   "name": "Golden",
    //   "description": "A vanilla-flavored cookie with a creamy filling.",
    //   "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "artificial flavor"],
    //   "price": 1.79,
    //   "image": "https://media.supermart.ae/12668-large_default/oreo-golden-biscuit-cookie-38g.jpg"
    // },
    {
      "id": 15,
      "name": "Mint",
      "description": "The classic Oreo with a mint-flavored filling.",
      "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin", "artificial flavor"],
      "price": 2.29,
      "image": "https://www.dairyprocessing.com/ext/resources/2023/02/16/Oreo-mint-new-flavor-ice-cream.jpg?height=667&t=1677266325&width=889",
      count : 1
    },
    {
      "id": 16,
      "name": "Peanut Butter",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 2.99,
      "image": "https://media1.popsugar-assets.com/files/thumbor/0c4VFKNQmPumbjod7JxZ499XaQQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/02/790/n/1922195/dd05f09e8cd7454c_cadbury1.jpg",
      count : 1
    },


    {
      "id": 17,
      "name": "Oreo mint creme candle",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 1.55,
      "image": "https://www.oreo.com/media/wysiwyg/Mint_Candle.png",
      count : 1
    },
    {
      "id": 18,
      "name": "Oreo Birthday cake candle",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 1.65,
      "image": "https://www.oreo.com/media/wysiwyg/bday_candle.png",
      count : 1
    },
    {
      "id": 19,
      "name": "Oreo Mint Creme Hat",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 2.99,
      "image": "https://www.oreo.com/media/wysiwyg/Mint_Cap.png",
      count : 1
    },
    {
      "id": 20,
      "name": "OREO Chocolate-Raspberry Mousse Cake Tower",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 3.89,
      "image": "https://www.oreo.com/media/wysiwyg/hp_mousse_cake.jpg",
      count : 1
    },
    {
      "id": 21,
      "name": "OREO Mint Chocolate Chip Pops",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 1.59,
      "image": "https://www.oreo.com/media/wysiwyg/hp_mint_bars.jpg",
      count : 1
    },
    {
      "id": 22,
      "name": "OREO Crumbles Cheesecake Squares",
      "description": "Chocolate cookies with a creamy peanut butter filling.",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": 1.82,
      "image": "https://assets.vogue.in/photos/5ed0d754193ac7578d6da887/16:9/w_1280,c_limit/chocolate%20ice%20cream%20homemade%20ice%20cream%20recipes%20recipes%20to%20make%20at%20home%20coffee%20ice%20cream.jpg",
      count : 1
    },
    {
      "id": 23,
      // "name": "OREO Mint Chocolate Chip Pops",
      "description": "Cookise Stock ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "119.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTst-k-TgUWmYCiLy4TVWlQzmRq_lpIEYetQQ&usqp=CAU",
      count : 1
    },
    {
      "id": 24,
      "description": "Definion Hogh Quality Widescreen",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "220.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRere_LSxwrbTiZ98ghPDnE6FwDq_IDBxS_Hw&usqp=CAU",
      count : 1
    },
    {
      "id": 25,
      "description": "a cokise for cookise",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "99.00",
      "image": "https://e1.pxfuel.com/desktop-wallpaper/225/412/desktop-wallpaper-cookies.jpg",
      count : 1
    },
    {
      "id": 26,
      "description": "christmas cookies, advent, cookie, christmas, food, food and drink, freshness",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "419.00",
      "image": "https://p1.pxfuel.com/preview/713/966/392/christmas-cookies-advent-cookie-christmas.jpg",
      count : 1
    },
    {
      "id": 27,
      "description": "Bakery cookise ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "99.00",
      "image": "https://w0.peakpx.com/wallpaper/854/891/HD-wallpaper-chocolate-vanilla-cream-filled-cookies-sandwiches-delicious-chocolate-abstract-sweet-dessert-filled-bakery-cookies-vanilla-cream-sandwiches-thumbnail.jpg",
      count : 1
    },
    {
      "id": 28,
      "description": "Cookise red",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "299.00",
      "image": "https://e1.pxfuel.com/desktop-wallpaper/64/433/desktop-wallpaper-cookies-red-velvet-sandwich-chocolate-cream-cooking-recipe-food-red-velvet-cake-thumbnail.jpg",
      count : 1
    },
    {
      "id": 29,
      "description": "Cookise cream",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "179.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrq_RIHym76iSi5XDxsJDNKe0-VIxdbXfHg&usqp=CAU",
      count : 1
    },
    {
      "id": 23,
      "description": "Cookise and cream",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "649.00",
      "image": "https://c4.wallpaperflare.com/wallpaper/417/490/435/stracciatella-ice-cream-cookies-and-cream-ice-cream-wallpaper-preview.jpg",
      count : 1
    },
    {
      "id": 31,
      "description": "Ice Cream Chocolate",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "369.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqANdKywqbMLgcQwexD91aRm_rN3gXW8iCbXxJp6in3yt9MZbU12tyvLX5dC-QEu3hDo&usqp=CAU",
      count : 1
    },
    {
      "id": 32,
      "description": "Ice Cream",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "129.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTKWgLeGv0OYEuhX0OU4bQuMd69SawiuiJcEdD_Er9Phpi9z53sApl4HNFOeCKBDbr_o&usqp=CAU",
      count : 1
    },
    {
      "id": 33,
      "description": "Ice Cream for chocolate",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "229.00",
      "image": "https://cdn.wallpapersafari.com/81/38/VdHOxC.jpg"
    },
    {
      "id": 34,
      "description": "Cream gold",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "475.00",
      "image": "https://watermark.lovepik.com/photo/20211120/large/lovepik-healthy-cold-food-picture_500470374.jpg",
      count : 1
    },
    {
      "id": 35,
      "description": "National Chocolate Ice Cream",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "449.00",
      "image": "https://www.daysoftheyear.com/wp-content/uploads/chocolate-ice-cream-day1-scaled.jpg",
      count : 1
    },
    {
      "id": 36,
      "description": "Cream Wafer Sandwich Cookise",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "449.00",
      "image": "https://www.tastesoflizzyt.com/wp-content/uploads/2020/06/cream-wafer-sandwich-cookies-1200-2.jpg",
      count : 1
    },
    {
      "id": 37,
      "description": "Raspberry Cream Sandwich Cookise",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "199.00",
      "image": "https://curlygirlkitchen.com/wp-content/uploads/2021/01/Valentines-Conversation-Cookies-Vanilla-Sugar-Raspberry-Sandwich-006.jpg",
      count : 1
    },
    {
      "id": 38,
      "description": "Cookise ice Cream Sandwiches",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "249.00",
      "image": "https://www.theseasonedmom.com/wp-content/uploads/2020/06/Cookie-Ice-Cream-Sandwiches-5.jpg",
      count : 1
    },
    {
      "id": 39,
      "description": "Cream Cheese Cookies",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "639.00",
      "image": "https://pizzazzerie.com/wp-content/uploads/2018/06/cream-cheese-cookies-recipe.jpg",
      count : 1
    },
    {
      "id": 40,
      "description": "CREAM Cookies Rule Everything",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "339.00",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5-eLUyfpp14xjQSWhZYX57TlI2J5-SEp4g&usqp=CAU",
      count : 1
    },
    {
      "id": 41,
      "description": "Coconut ice Cream Sandwiches With Salty Chocolate shell",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "379.00",
      "image": "https://assets.bonappetit.com/photos/60d20eef4a22a6b07ebe6938/16:9/w_3488,h_1962,c_limit/Basically-Icecream-Sandwiches.jpg",
      count : 1
    },
    {
      "id": 42,
      "description": "Chocolate Marshmallow Cookise",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "145.00",
      "image": "https://thecookiedoughdiaries.com/wp-content/uploads/2022/11/chocolate-marshmallow-cookies-16.jpg",
      count : 1
    },
    {
      "id": 43,
      "description": "Cookie MOnster ice Cream",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "309.00",
      "image": "https://princesspinkygirl.com/wp-content/uploads/2021/06/Cookie-Monster-Ice-Cream-14-square-1200.jpg",
      count : 1
    },
    {
      "id": 44,
      "description": "Cookies & Cream-Connisseur",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "538.00",
      "image": "https://connoisseuricecream.com.au/wp-content/uploads/2021/06/CookiesCream_0002_Connoisseur_Sticks_Aug05-1.jpg",
      count : 1
    },
    {
      "id": 45,
      "description": "Cookise and Cream ice Cream ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "499.00",
      "image": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-cookies-and-cream-ice-cream-pint-1500x1140.png",
      count : 1
    },
    {
      "id": 46,
      "description": "Cookies and Cream Cookise",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "145.00",
      "image": "https://laneandgreyfare.com/wp-content/uploads/2022/05/Cookies-and-Cream-Cookies-11.jpg",
      count : 1
    },
    {
      "id": 47,
      "description": "Cookies and Cookise",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "65.00",
      "image": "https://www.southernplate.com/wp-content/uploads/2018/12/DSC_9469.jpg",
      count : 1
    },
    {
      "id": 48,
      // "name": "Chocolate Chip",
      "description": "Chocolate cookies",
      // "ingredients": ["flour", "sugar", "butter", "chocolate chips"],
      "price": "199.00",
      "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      count : 1
    },
    {
      "id": 49,
      // "name": "Oatmeal Raisin",
      "description": "Cookie hape",
      "ingredients": ["flour", "sugar", "butter", "oats", "raisins"],
      "price": "90.00",
      "image": "https://c4.wallpaperflare.com/wallpaper/808/999/677/cookies-food-chocolate-wallpaper-preview.jpg",
      count : 1
    },

    {
      "id": 50,
      "name": "Chocolate Chip",
      "description": "A classic biscuit with chocolate chips baked in.",
      "ingredients": ["flour", "sugar", "butter", "chocolate chips"],
      "price": 1.99,
      "image": "https://sugarspunrun.com/wp-content/uploads/2018/02/Oreo-Stuffed-Chocolate-Chip-Cookies-1-of-1-2.jpg",
      count : 1
    },

    {
      "id": 51,
      "description": "Chocolate Cream ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "225.00",
      "image": "https://hips.hearstapps.com/womansday/assets/cm/15/09/54ef920ee0977_-_chocolate-cream-filled-sandwich-cookies-recipe-wdy0913-xl.jpg",
      count : 1
    },
    {
      "id": 52,
      "description": "Maple Cream Sandwich Cookise ",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "225.00",
      "image": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5985631785001/95076ef3-dc0a-4ba6-8112-4a07f68e3273/caa562f0-8682-48a8-b1a5-e1be211abc44/1280x720/match/image.jpg",
      count : 1
    },
    {
      "id": 53,
      "description": "Double Chocolate Chip ice Cream Cookie Sandwich",
      "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
      "price": "243.00",
      "image": "https://latinamommeals.com/wp-content/uploads/2019/05/Double-Chocolate-Ice-Cream-Cookie-Sandwich-40-of-43.jpg",
      count : 1
    },
    // {
    //   "id": 54,
    //   "description": "Gluten Free ice Cream Sandwich Cookies",
    //   "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
    //   "price": "243.00",
    //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt4Iyg7JYvh0K7fDn023ZHtG6LJOGH_7EFg&usqp=CAU",
    //   count : 1
    // },
    // {
    //   "id": 55,
    //   "description": "35 Best Sandwich Cookiess-Comfortable Food",
    //   "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
    //   "price": "245.00",
    //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAW2arEBJPDzAea-BUveYLI4-XfduWzXF-nw&usqp=CAU",
    //   count : 1
    // },
    // {
    //   "id": 56,
    //   "description": "Cookies and Cream ice Cream",
    //   "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
    //   "price": "245.00",
    //   "image": "https://www.chewoutloud.com/wp-content/uploads/2013/08/cookies-and-cream-in-white-bowl.jpg",
    //   count : 1
    // },





  ]
}

export default data