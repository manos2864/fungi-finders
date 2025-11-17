import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import variables from "@/styles/_exports.module.scss";

interface CardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  className?: string;
  bgColor?:
    | "light"
    | "extra-light"
    | "main"
    | "dark"
    | "accent-dark"
    | "accent-main"
    | "accent-light";
  children: ReactNode;
  style?: Record<string, string>;
}

const Card: FC<CardProps> = ({
  imageUrl,
  title,
  bgColor,
  className,
  imageAlt,
  style,
  children,
}) => (
  <Container
    style={style}
    className={`card border-radius-3 ${bgColor ? `bg-${bgColor}` : ""} ${
      className || ""
    }`}
  >
    {imageUrl ? (
      <div className="card__image">
        <img src={imageUrl} alt={imageAlt || ""} />
      </div>
    ) : null}

    <div className="card__description">
      <h3 className="card__title">{title}</h3>

      {children}
    </div>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: var(--card-flex-direction, column);
  padding: ${variables.size16};
  gap: var(--card-gap, ${variables.size16});

  .card {
    &__title {
      font-size: var(--card-title-font-size, ${variables.size24});
      text-wrap: pretty;
      color: var(--card-title-color, ${variables["text-brand"]});
    }

    &__description {
      display: flex;
      flex-direction: column;
      gap: var(--card-gap, ${variables.size16});
    }

    &__image {
      img {
        min-block-size: 100%;
        object-fit: cover;
        border-radius: ${variables.size8};
      }
    }
  }
`;
