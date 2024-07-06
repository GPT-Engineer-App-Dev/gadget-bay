import { useParams } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone.", image: "/placeholder.svg" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop.", image: "/placeholder.svg" },
  { id: 3, name: "Headphones", price: "$99", description: "Noise-cancelling headphones.", image: "/placeholder.svg" },
  { id: 4, name: "Smartwatch", price: "$199", description: "A stylish smartwatch.", image: "/placeholder.svg" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[400px]" />
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter>
          <Button>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;