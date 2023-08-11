import Stripe from "stripe";
import Products from "./Products";

export async function getStripeData() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { data: prices } = await stripe.prices.list({
      active: true,
      limit: 10,
      expand: ["data.product"],
    });
    const products = prices.map((price) => ({
      id: price.id,
      name: price.product.name,
      price: price.unit_amount / 100, // Convert the amount to the appropriate currency
      image: price.product.images[0],
    }));
    return products;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

export default async function Page() {
  let products = await getStripeData();
  console.log(products);
  return (
    <>
      <Products products={products} />
    </>
  );
}
