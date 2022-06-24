export const getCartFromLS = () => {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
}

export const getCategoryFromLS = () => {
  const data = localStorage.getItem("category");
  return data ? JSON.parse(data) : 0;
}

export const getSortFromLS = () => {
  const data = localStorage.getItem("sort");
  return data ? JSON.parse(data) : { name: "популярности", sortProperty: "rating" };
}