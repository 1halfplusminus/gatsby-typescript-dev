import { ErrorMessage, InjectedFormikProps } from "formik"
import React from "react"
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

export const ReservationForm = ({
  isSubmitting,
  values: { startDate, endDate },
  setFieldValue,
}: InjectedFormikProps<ReservationFormProps, ReservationFormValues>) => {
  return (
    <Form
      flex={1}
      backgroundColor="grey"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      padding={3}
    >
      <FormRow>
        <Box justifyContent="center" flexBasis="50%">
          <StyledDatePicker
            selected={startDate}
            onChange={value => setFieldValue("startDate", value)}
            placeholderText="Arrivée le"
            marginRight={2}
          />
        </Box>
        <Box justifyContent="center" flexBasis="50%">
          <StyledDatePicker
            selected={endDate}
            onChange={value => setFieldValue("endDate", value)}
            placeholderText="Départ le"
          />
        </Box>
      </FormRow>
      <FormRow>
        <Box justifyContent="center" flexBasis="50%" marginRight={2}>
          <Input type="text" name="firstName" placeholder="Prénom" />
          <ErrorMessage name="firstName" component="div" />
        </Box>
        <Box justifyContent="center" flexBasis="50%">
          <Input type="text" name="lastName" placeholder="Nom" />
          <ErrorMessage name="lastName" component="div" />
        </Box>
      </FormRow>
      <FormRow>
        <Box justifyContent="center" flexBasis="50%" marginRight={2}>
          <Input type="text" name="address" placeholder="Adresse" />
          <ErrorMessage name="address" component="div" />
        </Box>
        <Box justifyContent="center" flexBasis="50%">
          <Input type="text" name="country" placeholder="Pays" />
          <ErrorMessage name="country" component="div" />
        </Box>
      </FormRow>
      <FormRow>
        <Box justifyContent="center" flexBasis="50%" marginRight={2}>
          <Input type="email" name="email" placeholder="Adresse email" />
          <ErrorMessage name="address" component="div" />
        </Box>
        <Box justifyContent="center" flexBasis="50%">
          <Input type="text" name="phone" placeholder="Numéro de téléphone" />
          <ErrorMessage name="country" component="div" />
        </Box>
      </FormRow>
      <FormRow flex={1} width="100%">
        <TextArea
          name="note"
          component="textarea"
          rows={5}
          flex={1}
          placeholder="Entrer vos notes ici"
        />
      </FormRow>
      <PrimaryButton
        flex={1}
        type="submit"
        disabled={isSubmitting}
        gridColumn={3}
      >
        Envoyer
      </PrimaryButton>
    </Form>
  )
}
