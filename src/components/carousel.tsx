import NukaCarousel from "nuka-carousel"
import React from "react"
import styled from "styled-components"
import { Box } from "./core/box"

const demoSteps = [
  {
    title: "",
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1800&h=600&q=60",
  },
  {
    title: "",
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1800&h=600&q=60",
  },
]

export const Image = styled(Box)<{ imgPath: string }>`
  z-index: 0;
  background-position: center center;
  background-repeat: no-repeat;
  transition: background-image 300ms ease-in 200ms;
  background-image: url(${({ imgPath }) => imgPath});
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  flex: 1;
  height: 530px;
`

export const CarouselController = styled.button`
  border: 0px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10px;
  opacity: 1;
  :disabled {
    opacity: 0.3;
  }
`

export interface HomeSlideProps {
  imgPath: string
  label: string
  title: string
}
export const HomeSlide = ({ imgPath }: HomeSlideProps) => {
  return <Image imgPath={imgPath} />
}

export const Carousel = () => {
  return (
    <NukaCarousel
      initialSlideHeight={530}
      autoplay={true}
      renderCenterLeftControls={({ previousSlide, currentSlide }) => (
        <CarouselController
          disabled={currentSlide === 0}
          onClick={previousSlide}
        >
          Précédent
        </CarouselController>
      )}
      renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => (
        <CarouselController
          disabled={slideCount - 1 === currentSlide}
          onClick={nextSlide}
        >
          Suivant
        </CarouselController>
      )}
    >
      {demoSteps.map((step, index) => (
        <HomeSlide
          key={index}
          imgPath={step.imgPath}
          label={step.label}
          title={step.title}
        />
      ))}
    </NukaCarousel>
  )
}
