import css from "@styled-system/css"
import React, { useMemo } from "react"
import styled from "styled-components"
import { Box, BoxRow } from "../core/box"
import { Text } from "../core/text"
import { Title3 } from "../core/title"

const Img = Box.withComponent("img")

const ThumbnailImage = styled(Box)`
  background-image: url("https://s3.amazonaws.com/planyo/25138_66406_118829_R.jpg");
  height: 170px;
  background-position: center;
  background-size: cover;
`

const BoxWrapper = styled(Box)`
  margin: 10px;
  min-width: 325px;
  padding: 10px 10px 0px 10px;
  background: rgba(0, 0, 0, 0.017);
  flex-direction: column;
`

const BoxTitle = styled(Title3)`
  font-family: "Open Sans";
  ${css({
    color: "h1",
  })}
  font-weight: bold;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0);
`

export const RoomListingCol = styled(Box)`
  flex-basis: 30%;
  flex-grow: 0;
`

const BoxLabel = styled(Text)`
  ${css({
    color: "black",
  })}
  line-height: 1.42857143;
`

export const RoomListingWrapper = styled(Box)`
  flex: 1;
  flex-direction: row;
  display: flex;
`

export const LabelRow = styled(BoxRow)`
  justify-content: space-between;
  ${css({ paddingTop: 2, paddingBottom: 1 })}
`

export const BoxButton = styled.button`
  ${css({
    color: "primaryText",
    backgroundColor: "primary",
  })}
  font-size: 13px !important;
  text-decoration: none;
  padding: 8px 20px 8px 20px !important;
  font-family: "Open Sans";
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 10px;
  line-height: 20px;
  margin: 10px 0px;
  :hover {
    ${css({
      backgroundColor: "primaryHover",
    })}
    color: #fff;
  }
`
export type RoomListingProps = Partial<typeof defaultProps> & {
  title: string
  price: number
}

const defaultProps = {
  price: 0,
}

export const RoomListing = ({ title, price }: RoomListingProps) => {
  const priceFormatted = useMemo(
    () => Intl.NumberFormat("fr-FR").format(price),
    [price]
  )
  return (
    <BoxWrapper>
      <ThumbnailImage />
      <BoxTitle> {title} </BoxTitle>
      <LabelRow>
        <BoxLabel> Prix </BoxLabel>
        <BoxLabel> {priceFormatted} xpf / nuit</BoxLabel>
      </LabelRow>
      <LabelRow>
        <BoxButton> DETAILS </BoxButton>
        <BoxButton> Faire ça reservation </BoxButton>
      </LabelRow>
    </BoxWrapper>
  )
}

RoomListing.defaultProps = defaultProps

export default RoomListing
