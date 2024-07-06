import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "/placeholder.svg" },
  { id: 2, name: "Laptop", price: "$799", image: "/placeholder.svg" },
  { id: 3, name: "Headphones", price: "$99", image: "/placeholder.svg" },
  { id: 4, name: "Smartwatch", price: "$199", image: "/placeholder.svg" },
];

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="hero mb-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Electronics Store</h1>
          <p className="text-xl mb-4">Find the best deals on the latest electronics.</p>
          <Button size="lg">Shop Now</Button>
        </div>
      </section>
      <section className="featured-products mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[200px]" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p>{product.price}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/products/${product.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <Button className="ml-2">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="promotions">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <div className="text-center">
          <p className="text-xl mb-4">Get up to 50% off on selected items!</p>
          <Button size="lg">View Offers</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;