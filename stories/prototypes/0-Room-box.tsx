import { storiesOf } from "@storybook/react"
import { Formik } from "formik"
import React from "react"
import { ThemeProvider } from "styled-components"
import { Box, FlexRow } from "../../src/components/core/box"
import {
  ReservationForm,
  ReservationFormValues,
} from "../../src/components/rooms/form/reservation-form"
import {
  RoomListing,
  RoomListingCol,
  RoomListingWrapper,
} from "../../src/components/rooms/listing"
import { Context } from "../../src/containers/context"
import theme from "../../src/theme"

const stories = storiesOf("Room listing", module)

stories.add("Listing box", () => (
  <ThemeProvider theme={theme}>
    <RoomListingWrapper>
      <RoomListingCol>
        <RoomListing title="" price={150000} />
      </RoomListingCol>
    </RoomListingWrapper>
  </ThemeProvider>
))

stories.add("Form reservation frontend", () => (
  <Context>
    <FlexRow justifyContent="center">
      <Box container={true} justifyContent="center" flexBasis="40%">
        <Formik<ReservationFormValues>
          initialValues={{}}
          onSubmit={() => {
            return
          }}
          render={props => <ReservationForm {...props} />}
        />
      </Box>
    </FlexRow>
  </Context>
))
