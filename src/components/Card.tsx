import { FC, ReactNode } from "react";

interface CardProps {
  imageUrl?: string;
  imageAlt?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ imageUrl, imageAlt, children }) => (
  <div className="card">
    {imageUrl && imageAlt ? <img src={imageUrl} alt={imageAlt} /> : null}

    {children}
  </div>
);

export default Card;
