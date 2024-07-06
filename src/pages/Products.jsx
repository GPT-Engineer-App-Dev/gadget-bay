import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "/placeholder.svg" },
  { id: 2, name: "Laptop", price: "$799", image: "/placeholder.svg" },
  { id: 3, name: "Headphones", price: "$99", image: "/placeholder.svg" },
  { id: 4, name: "Smartwatch", price: "$199", image: "/placeholder.svg" },
];

const Products = () => {
  const [products, setProducts] = useState(sampleProducts);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";
    if (searchQuery) {
      const filteredProducts = sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(sampleProducts);
    }
  }, [location.search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
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
    </div>
  );
};

export default Products;