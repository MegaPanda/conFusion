'use strict';

angular.module('confusionApp')
        .constant("baseURL", "http://localhost:3000/")
        .service('menuFactory', [function() {
    
                this.dishes = [
    {
      "id": 0,
      "name": "Uthapizza",
      "image": "app/images/uthapizza.png",
      "category": "mains",
      "label": "Hot",
      "price": 4.99,
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        },
        {
          "rating": "3",
          "comment": "Not bad!",
          "author": "MegaPanda",
          "date": "2016-11-16T18:07:33.571Z"
        }
      ]
    },
    {
      "id": 1,
      "name": "Zucchipakoda",
      "image": "app/images/zucchipakoda.png",
      "category": "appetizer",
      "label": "",
      "price": 1.99,
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        }
      ]
    },
    {
      "id": 2,
      "name": "Vadonut",
      "image": "app/images/vadonut.png",
      "category": "appetizer",
      "label": "New",
      "price": 1.99,
      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        },
        {
          "rating": "2",
          "comment": "So terrible!",
          "author": "Ziva",
          "date": "2016-11-18T11:47:33.520Z"
        },
        {
          "rating": "1",
          "comment": "I don't like it at all!",
          "author": "Dory",
          "date": "2016-11-25T21:59:08.835Z"
        }
      ]
    },
    {
      "id": 3,
      "name": "ElaiCheese Cake",
      "image": "app/images/elaicheesecake.png",
      "category": "dessert",
      "label": "",
      "price": 2.99,
      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        },
        {
          "rating": "5",
          "comment": "I would love to come back for this!",
          "author": "PolarBear",
          "date": "2016-11-18T11:45:38.787Z"
        }
      ]
    }
  ];
                
            
                this.promotion = [
    {
      "id": 0,
      "name": "Weekend Grand Buffet",
      "image": "app/images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
    }
  ];
                        
        }])

        .factory('corporateFactory', [function() {
    
            var corpfac = {};
     
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            
            corpfac.leaders = [
    {
      "id": 0,
      "name": "Peter Pan",
      "image": "app/images/panda.jpg",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
    },
    {
      "id": 1,
      "name": "Dhanasekaran Witherspoon",
      "image": "app/images/polar.jpg",
      "designation": "Chief Food Officer",
      "abbr": "CFO",
      "description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
    },
    {
      "id": 2,
      "name": "Agumbe Tang",
      "image": "app/images/grizzly.jpg",
      "designation": "Chief Taste Officer",
      "abbr": "CTO",
      "description": "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
    },
    {
      "id": 3,
      "name": "Alberto Somayya",
      "image": "app/images/formosa.jpg",
      "designation": "Executive Chef",
      "abbr": "EC",
      "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
    }
  ];
            
            return corpfac;
        }]);


