import React, { Component } from "react";
import ReactDOM from "react-dom/client";


// logo
const logo = () => (
    <a className="logo">
        <img alt="Logo" src="data:image/png;base64,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" ></img>
    </a>
)

// Navbar is a Functional Component--->
const Header = () => (
    <div className="navbar">
        {logo()}
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
)

const restrautList = [
    {
        "info": {
            "id": "223399",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Eminent Mall",
            "areaName": "Mehta Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "promoted": true,
            "adTrackingId": "cid=10060380~p=1~eid=0000018c-9012-d935-1a1f-8d81003a0157~srvts=1703224203573~45995",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "FREE ITEM"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=223399",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "753408",
            "name": "Mr. Paratha",
            "cloudinaryImageId": "2c85301dadc40020c2decc49a7463de9",
            "locality": "Model town",
            "areaName": "Hari Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "Street Food"
            ],
            "parentId": "140339",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=753408",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "254126",
            "name": "McDonald's",
            "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
            "locality": "Metropolis Mall",
            "areaName": "Hari Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=254126",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "580150",
            "name": "Parantha Junction",
            "cloudinaryImageId": "umljmlajoechgm9tfpuc",
            "locality": "Town Park",
            "areaName": "Hari Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 3.3,
            "veg": true,
            "parentId": "17403",
            "avgRatingString": "3.3",
            "totalRatingsString": "3",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 18:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=580150",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "798472",
            "name": "Jhilmil Hisar Dhaba",
            "cloudinaryImageId": "313774ada0dc4f878df143b7d7a095f0",
            "locality": "Vijaynagar Road",
            "areaName": "Hari Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian"
            ],
            "parentId": "477445",
            "avgRatingString": "NEW",
            "promoted": true,
            "adTrackingId": "cid=9923409~p=2~eid=0000018c-9012-d935-1a1f-8d82003a022c~srvts=1703224203573~45995",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=798472",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "575734",
            "name": "Barista Coffee",
            "cloudinaryImageId": "02731f6bd73f982bc74a522edd9c1b01",
            "locality": "Eminent Mall",
            "areaName": "Hari Nagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2359",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹449",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=575734",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "674416",
            "name": "MBA Chai Wala",
            "cloudinaryImageId": "fda9ad56b9d62070fec105cd93693129",
            "locality": "Red Square Market",
            "areaName": "Hari Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Burgers",
                "Italian"
            ],
            "avgRating": 3.5,
            "veg": true,
            "parentId": "134120",
            "avgRatingString": "3.5",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 21:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=674416",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "684455",
            "name": "Nagpal's Chole Bhature",
            "cloudinaryImageId": "dc6b072f4f51d622b96154f8d9bac78e",
            "locality": "Red Cross Market Parking",
            "areaName": "Hari Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Beverages"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "251364",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=684455",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "455912",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
            "locality": "Bank Colony",
            "areaName": "Hari Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "1803",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=10079607~p=3~eid=0000018c-9012-d935-1a1f-8d83003a0303~srvts=1703224203573~45995",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455912",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "566520",
            "name": "Faasos' Signature Wraps & Rolls",
            "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
            "locality": "Bank Colony",
            "areaName": "Hari Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "parentId": "340366",
            "avgRatingString": "3.9",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-22 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=566520",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
]
// Body Of App
const RestaurantCard = ({ name, cloudinaryImageId, avgRating, costForTwo }) => {
    return (<div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + cloudinaryImageId}></img>
        <h1>{name}</h1>
        <h2>{avgRating} stars</h2>
        <h3>{costForTwo}</h3>
    </div>)
}
const Body = () => (
    <div className="body-div">
        {restrautList.map(restrautList => {
            return(<RestaurantCard {...restrautList.info} key = {restrautList.info.id} />)
        })}
    </div>
)

// Footer of app
const Footer = () => (
    <h1>footer</h1>
)

// all App Components 
// <></> This is react fregment
const AppLayout = () => (
    <>
        <Header />
        <Body />
        <Footer />
    </>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)