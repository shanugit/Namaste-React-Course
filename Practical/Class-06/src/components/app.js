fetch(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING",
  { mode: "no-cors" }
)
  .then((res) => res.text())
  .then((data) => console.log("data " + data))
  .catch((err) => console.log(err));
