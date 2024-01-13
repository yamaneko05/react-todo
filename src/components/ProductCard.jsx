import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title="product image"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.category}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="line-clamp-3"
        >
          {product.description}
        </Typography>
        <p
          className="text-2xl font-bold"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          <span className="text-xl">$</span>
          {product.price}
        </p>
      </CardContent>
    </Card>
  );
}
