export const getCartFromLS = () => {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
}