import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import variables from "@/styles/_exports.module.scss";

interface CardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  bgColor?:
    | "light"
    | "extra-light"
    | "main"
    | "dark"
    | "accent-dark"
    | "accent-main"
    | "accent-light";
  children: ReactNode;
}

const Card: FC<CardProps> = ({
  imageUrl,
  title,
  bgColor,
  imageAlt,
  children,
}) => (
  <Container
    className={`card border-radius-3 ${bgColor ? `bg-${bgColor}` : ""}`}
  >
    {imageUrl ? <img src={imageUrl} alt={imageAlt || ""} /> : null}

    <h3 className="card__title">{title}</h3>

    {children}
  </Container>
);

export default Card;

const Container = styled.div`
  display: grid;
  gap: var(--card-gap, ${variables.size16});
  padding: ${variables.size16};

  img {
    border-radius: ${variables.size8};
  }

  .card {
    &__title {
      font-size: var(--card-title-font-size, ${variables.size24});
      color: var(--card-title-color, ${variables["text-brand"]});
    }
  }
`;
