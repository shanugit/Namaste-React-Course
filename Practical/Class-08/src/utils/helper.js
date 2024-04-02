export function getFilterData(searchInput, allRestaurant) {
  console.log(allRestaurant.length);
  return searchInput.length > 0
    ? allRestaurant.filter((item) =>
        item.info.name.toLowerCase().includes(searchInput.toString().trim())
      )
    : [];
}
