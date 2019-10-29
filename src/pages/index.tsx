import css from "@styled-system/css"
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik"
import React, { useMemo } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import fr from "react-phone-number-input/locale/fr"
import "react-phone-number-input/style.css"
import styled from "styled-components"
import { color, ColorProps, FlexProps, SpaceProps, textAlign, TextAlignProps } from "styled-system"
import Swal from "sweetalert2"
import * as Yup from "yup"
import { Box, FlexColumn } from "../components/core/box"
import { Text } from "../components/core/text"
import { Title1, Title3 } from "../components/core/title"
import { Header } from "../components/navigations/header"
import { Layout } from "../components/page/layout"
import { Paper } from "../components/paper"
import { PrimaryButton } from "../components/theme/primary-button"
import SEO from "../gatsby/seo"

const Label = styled(Title3)`
  ${css({
    color: "primary",
    fontWeight: 0,
    marginBottom: 3,
    marginTop: 3,
  })}
  span {
    ${css({
      color: "black",
    })}
  }
`
const TextArea = styled.textarea`
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  height: 200px;
  font-size: 18px;
  width: 100%;
  box-shadow: 0px 0px 40px #e1e1e138;
  padding: 4px;
  margin-bottom: 16px;
  text-align: left;
`

const StyledPhoneInput = styled(PhoneInput)<ColorProps & SpaceProps>`
  ${color}
  .react-phone-number-input__row {
    ${css({
      padding: 2,
    })}
  }
  .react-phone-number-input__input {
    ${css({
      backgroundColor: "white",
      fontSize: 3,
    })}
  }
`

const Input = styled.input<FlexProps & SpaceProps & ColorProps>`
  ${css({
    padding: 2,
    fontSize: 3,
  })}
  border: 1px solid #E1E1E1;
  border-radius: 4px;
  box-shadow: 0px 0px 40px #e1e1e138;
`

const TextHint = styled(Text)`
  ${css({ fontSize: 1 })}
`

const StyledErrorMessage = styled.div<ColorProps & SpaceProps & TextAlignProps>`
  ${css({ paddingBottom: 3, paddingTop: 3, color: "red" })}
  ${textAlign}
`

const maxChar = 156

const SendMessageSchema = Yup.object().shape({
  message: Yup.string()
    .max(156, "Votre message est trop long")
    .required("Ce champ est obligatoire"),
  destinataire: Yup.string()
    .required("Ce champ est obligatoire")
    .test("phone", "Format non valide", value => {
      return isValidPhoneNumber(value)
    }),
  expediteur: Yup.string().required("Ce champ est obligatoire"),
  captcha: Yup.string().required("Ce champ est obligatoire"),
})

const initialValues = {
  message: "",
  destinataire: "",
  expediteur: "",
  captcha: "",
}

export const MessageForm = () => {
  const {
    handleChange,
    setFieldValue,
    values: { message },
    handleSubmit,
    errors,
    touched,
  } = useFormikContext<typeof initialValues>()
  const onPhoneNumberChange = (value: string) => {
    setFieldValue("destinataire", value)
  }
  const onReCaptchaChange = (token: string | null) => {
    setFieldValue("captcha", token ? token : "")
    return
  }
  const calculeRemainingCharacter = useMemo(
    () => Math.max(maxChar - message.length, 0),
    [message]
  )
  return (
    <Form onSubmit={handleSubmit}>
      <FlexColumn padding={3}>
        <Label>
          <span>Etape: 1</span> Le message
        </Label>
        <Field as={TextArea} onChange={handleChange} name="message" rows={9} />
        <TextHint>Caractères restants {calculeRemainingCharacter} </TextHint>
        <ErrorMessage component={StyledErrorMessage} name="message" />
        <Label>
          <span>Etape: 2</span> Destinataire
        </Label>
        <StyledPhoneInput
          countries={["NC"]}
          country="NC"
          value=""
          onChange={onPhoneNumberChange}
          international={false}
          labels={fr}
          placeholder="Numéro du destinataire"
        />
        {errors.destinataire && touched.destinataire ? (
          <StyledErrorMessage>{errors.destinataire}</StyledErrorMessage>
        ) : null}
        <Label>
          <span>Etape: 3</span> Expéditeur
        </Label>
        <Field
          as={Input}
          onChange={handleChange}
          name="expediteur"
          placeholder="Qui envoie ce SMS ?"
        />
        <ErrorMessage component={StyledErrorMessage} name="expediteur" />
      </FlexColumn>
      <FlexColumn
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Label>
          <span>Etape: 4</span> Le Captcha
        </Label>
        <FlexColumn marginTop={3} marginBottom={3}>
          <ReCAPTCHA
            sitekey="6Ld8BMAUAAAAALt-z47bj7-5Ax6yIRx6HD-74D-d"
            onChange={onReCaptchaChange}
          />
          {errors.captcha && touched.captcha ? (
            <StyledErrorMessage textAlign="center">
              {errors.captcha}
            </StyledErrorMessage>
          ) : null}
        </FlexColumn>

        <PrimaryButton type="submit">J'envoie</PrimaryButton>
      </FlexColumn>
    </Form>
  )
}
export const IndexPage = () => {
  return (
    <Layout>
      <SEO title="KIKOO NC | SMS Gratuits en Nouvelle-Calédonie" />
      <Header />
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
      >
        <Paper flexBasis="85%" flexDirection="column" padding={3}>
          <Box>
            <Title1 textAlign="center">
              {" "}
              SMS Gratuits dans le Pacifique !
            </Title1>
          </Box>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              Swal.fire(
                "Bravo!",
                "Votre message a bien été envoyé !",
                "success"
              )
              return
            }}
            validationSchema={SendMessageSchema}
          >
            <MessageForm />
          </Formik>
        </Paper>
      </Box>
    </Layout>
  )
}

export default IndexPage
