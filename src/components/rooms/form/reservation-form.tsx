import { ErrorMessage, InjectedFormikProps } from "formik"
import React from "react"
import styled from "styled-components"
import { Box } from "../../core/box"
import { PrimaryButton } from "../../core/primary-button"
import { StyledDatePicker } from "../../form/date-picker"
import { Form } from "../../form/form"
import { FormRow } from "../../form/form-row"
import { Input, TextArea } from "../../form/input"

export interface ReservationFormProps {}
export interface ReservationFormValues {
  startDate?: Date
  endDate?: Date
  firstName?: string
  lastName?: string
  address?: string
  country?: string
  note?: string
}
const FormCol = styled(Box)`
  display: flex;
  justify-content: center;
`
FormCol.defaultProps = {
  flexBasis: "50%",
  padding: 2,
}
export const ReservationForm = ({
  isSubmitting,
  values: { startDate, endDate },
  setFieldValue,
}: InjectedFormikProps<ReservationFormProps, ReservationFormValues>) => {
  return (
    <Form flex={1} flexGrow={1} backgroundColor="#f5f5f5">
      <Box display="flex" flexDirection="column" flex={1}>
        <FormRow>
          <FormCol>
            <Box flex={1}>
              <StyledDatePicker
                variant="inline"
                value={startDate}
                onChange={value => setFieldValue("startDate", value)}
                label="Arrivée le"
              />
            </Box>
          </FormCol>
          <FormCol>
            <Box flex={1}>
              <StyledDatePicker
                variant="inline"
                value={endDate}
                onChange={value => setFieldValue("endDate", value)}
                label="Départ le"
              />
            </Box>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Input type="text" name="firstName" label="Prénom" />
            <ErrorMessage name="firstName" component="div" />
          </FormCol>
          <FormCol>
            <Input type="text" name="lastName" label="Nom" />
            <ErrorMessage name="lastName" component="div" />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Input type="text" name="address" label="Adresse" />
            <ErrorMessage name="address" component="div" />
          </FormCol>
          <FormCol>
            <Input
              placeholder="+687 73 68 28"
              type="text"
              name="phone"
              label="Numéro de téléphone"
            />
            <ErrorMessage name="country" component="div" />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol flexBasis="100%" paddingBottom={1}>
            <TextArea name="note" rows={5} flex={1} placeholder="Entrer vos notes ici" />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol flexBasis="100%" padding={0}>
            <PrimaryButton type="submit" disabled={isSubmitting}>
              Envoyer
            </PrimaryButton>
          </FormCol>
        </FormRow>
      </Box>
    </Form>
  )
}
