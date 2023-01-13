import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search Bar
 *  - RestaurentList
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - link
 *  - Copyright
 */

// React functional component with one html tag
// naming convenstion is Pascal case: industry best practices
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="data:image/jpeg;base64,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"
    />
  </a>
);

// This react element will be embedded in composite component differently
// naming convention is camel case
const title = (
  <h1 id="title2" key="t2">
    This is title2: which is a react element but not functional component
  </h1>
);

const Header = () => {
  return (
    <div className="header">
      {/* this is how functional components are embeded in composite elements */}
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config driven UI
const config = [
  {
    type: "carousal",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "KFC",
      },
      {
        name: "Dominos",
      },
      {
        name: "Burger King",
      },
    ],
  },
];

const restaurantLists = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "464509",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      uuid: "ad3d5699-2dab-4a1f-ba45-391ddd892b77",
      city: "1",
      area: "Frazer Town",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "qol6dzbjxyse0tylbznu",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 4.199999809265137,
      slugs: {
        restaurant: "leon-grill-frazer-town-frazer-town-2",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Smart Avenue, G-01, No. 90, Coles Road, Bangalore, BBMP East, Karnataka 560005",
      locality: "Pulkeshi Nagar",
      parentId: 371281,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [{ type: "PROMOTED" }],
      chain: [],
      feeDetails: {
        fees: [
          { name: "distance", fee: 4000, message: "" },
          { name: "time", fee: 0, message: "" },
          { name: "special", fee: 0, message: "" },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5697118~p=1~eid=00000185-9125-f646-171c-6d9800190133",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "464509",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 4.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "3241",
      name: "Meghana Foods",
      uuid: "93695df0-56e1-417e-b9a8-32084ebaadaf",
      city: "1",
      area: "Ashok Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "meghana-foods-central-bangalore",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
      locality: "Residency Road",
      parentId: 635,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          { name: "distance", fee: 2800, message: "" },
          { name: "time", fee: 0, message: "" },
          { name: "special", fee: 0, message: "" },
        ],
        totalFees: 2800,
        message: "",
        title: "Delivery Charge",
        amount: "2800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "3241",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "121603",
      name: "Kannur Food Point",
      uuid: "51983905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 6.5,
      slugs: {
        restaurant: "kannur-food-point-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
      locality: "SG Palya",
      parentId: 20974,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "55% off",
        shortDescriptionList: [
          {
            meta: "55% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "55% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "55% OFF",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "55% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          { name: "distance", fee: 5200, message: "" },
          { name: "time", fee: 0, message: "" },
          { name: "special", fee: 0, message: "" },
        ],
        totalFees: 5200,
        message: "",
        title: "Delivery Charge",
        amount: "5200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "121603",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 6.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "47493",
      name: "Hari Super Sandwich (3rd Block)",
      uuid: "97798836-f15a-4566-bdeb-7e4d1b0eac20",
      city: "1",
      area: "3rd Block",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ml1ituszk5qurjia3r9h",
      cuisines: ["Chaat", "Snacks", "Pizzas", "North Indian", "Indian"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "hari-super-sandwich-jayanagar-jayanagar",
        city: "bangalore",
      },
      cityState: "1",
      address: "No 177/A 22nd cross 3rd block Jayanagar Bangalore 560011",
      locality: "3rd Block",
      parentId: 352495,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          { name: "distance", fee: 4600, message: "" },
          { name: "time", fee: 0, message: "" },
          { name: "special", fee: 0, message: "" },
        ],
        totalFees: 4600,
        message: "",
        title: "Delivery Charge",
        amount: "4600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "47493",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "10575",
      name: "Pizza Hut",
      uuid: "2362d8b0-38df-4405-989b-53c5b08ce381",
      city: "1",
      area: "Langford Town",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "evfa6jofvgu4fjuc01ul",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "pizza-hut-oshngness-road-central-bangalore",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "4/1, O'Shaughnessy Road, Richmond Town, Langford Gardens, Bengaluru, Karnataka 560025",
      locality: "O'Shngnessy Road",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          { name: "distance", fee: 2800, message: "" },
          { name: "time", fee: 0, message: "" },
          { name: "special", fee: 0, message: "" },
        ],
        totalFees: 2800,
        message: "",
        title: "Delivery Charge",
        amount: "2800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "10575",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "568703",
      name: "Baking Bad",
      uuid: "2e9f1f2a-fee0-4c58-a690-8391f65c7e71",
      city: "1",
      area: "Indiranagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "b6da279539732f20f236d636e0a34d5f",
      cuisines: [
        "Pizzas",
        "Burgers",
        "Italian",
        "Desserts",
        "Beverages",
        "American",
        "Continental",
      ],
      tags: [],
      costForTwo: 65000,
      costForTwoString: "₹650 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 6,
      slugs: {
        restaurant: "baking-bad-indiranagar-indiranagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "462 Shri Krishna temple Road Indira Nagar 1st   Stage Stage 1 Indira Nagar Bengaluru, B.B.M.P  East, Karnataka-560038",
      locality: "1st Stage",
      parentId: 89,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [{ type: "PROMOTED" }],
      chain: [],
      feeDetails: {
        fees: [
          { name: "distance", fee: 5200, message: "" },
          { name: "time", fee: 0, message: "" },
          { name: "special", fee: 0, message: "" },
        ],
        totalFees: 5200,
        message: "",
        title: "Delivery Charge",
        amount: "5200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5613694~p=10~eid=00000185-9125-f646-171c-6d9b00190a31",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "568703",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 6,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurentCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Distance: {lastMileTravelString}</h4>
    </div>
  );
};
// we need to pass key in elements for virtual DOM and react reconciliation algo
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantLists.map((restaurant) => {
        return <RestaurentCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      {/* <RestaurentCard {...restaurantLists[0].data} />
      <RestaurentCard {...restaurantLists[1].data} />
      <RestaurentCard {...restaurantLists[2].data} />
      <RestaurentCard {...restaurantLists[3].data} />
      <RestaurentCard {...restaurantLists[4].data} />
      <RestaurentCard {...restaurantLists[5].data} /> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

// React.Fragement: Its like a empty tag
//JSX must have one parent
const AppLayout = () => {
  return (
    // Every JSX component must have one root
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
