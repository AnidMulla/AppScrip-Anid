export async function fetchAllProducts() {
  try {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
