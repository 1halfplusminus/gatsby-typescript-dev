import styledSystemCss from "@styled-system/css"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import { background, BackgroundProps } from "styled-system"
import { Box, FlexRow } from "../core/box"
import { Button } from "../core/button"
import { PrimaryButton } from "../theme/primary-button"

const NavbarToggleItem = styled.span<BackgroundProps>`
  display: none;
  ${background};
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
`
const NavbarToggler = styled(Button)<{ collapsed: boolean }>`
  display: none;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 25px;
    height: 30px;
    padding: 10px;
    margin: 18px 10px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    display: block;
    ${props =>
      props.collapsed &&
      css`
        & > :nth-child(1) {
          top: 6px;
        }
        & > :nth-child(2) {
          top: 12px;
        }
        & > :nth-child(3) {
          top: 18px;
        }
      `}
    ${props =>
      !props.collapsed &&
      css`
        & > :nth-child(1) {
          top: 5px;
          left: 4px;
          transform: rotate(45deg);
          transform-origin: left center;
        }
        & > :nth-child(2) {
          width: 0%;
          opacity: 0;
        }
        & > :nth-child(3) {
          top: 21px;
          left: 4px;
          transform: rotate(-45deg);
          transform-origin: left center;
        }
      `}
  }
`
const BoxHeader = Box.withComponent("header")

const HeaderWrapper = styled(BoxHeader)`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 85px;
  justify-content: center;
  line-height: 22px;
  font-size: 14px;
`
const HeaderRow = styled(Box)`
  position: relative;
  max-height: 100%;
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
`

const Container = styled(Box)`
  display: block;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${styledSystemCss({
    padding: [1],
    paddingLeft: [2, null],
    paddingRight: [2, null],
  })}
  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: ${props => props.theme.breakpoints.md};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: ${props => props.theme.breakpoints.lg};
  }

`

Container.defaultProps = {
  paddingLeft: 1,
  paddingRight: 1,
  margin: "auto",
}

const HeaderColumn = styled(Box)`
  align-self: stretch;
  flex-grow: 1;
`
const Navbar = styled(Box)<{ responsive?: boolean }>`
  align-items: center;
  align-self: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props =>
    props.responsive &&
    css`
      @media screen and (max-width: ${props.theme.breakpoints.lg}) {
        position: absolute;
        top: 99%;
        right: 0;
        left: 0;
        background: transparent;
        margin-top: 0px;
        z-index: 1000;
      }
    `}
  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    z-index: -1;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    ${({ backgroundColor }) =>
      styledSystemCss({
        backgroundColor: backgroundColor ? backgroundColor : ("white" as any),
      })}
  }
`
Navbar.defaultProps = {
  responsive: true,
  backgroundColor: "primary",
}
const NavbarHeader = styled(Box)<{ collapse: boolean }>`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    display: ${props => (props.collapse ? "none" : "")};
  }
`

const Li = Box.withComponent("li")

const NavbarItem = styled(Li)<{ responsive?: boolean }>`
  height: 100%;
`

const A = Box.withComponent("a")

const NavbarLink = styled(A)`
  height: 80px;
  padding-left: 0.85em;
  padding-right: 0.85em;
  transition: all 0.2s ease;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
  align-items: center;
  :focus,
  :hover {
    ${styledSystemCss({ color: "black" })}
    transition: all 0.2s ease;
  }
`

NavbarLink.defaultProps = {
  color: "white",
}

const Ul = FlexRow.withComponent("ul")

const NavbarNav = styled(Ul)<{ responsive?: boolean }>`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  align-items: center;
  ${props =>
    props.responsive &&
    css`
      @media screen and (max-width: ${props.theme.breakpoints.lg}) {
        overflow: hidden;
        overflow-y: auto;
        margin: 18px 0;
        flex-direction: column;
        flex-grow: 1;
        align-items: flex-start;
      }
    `}
  ${NavbarItem} {
    ${props =>
      props.responsive &&
      css`
        @media screen and (max-width: ${props.theme.breakpoints.lg}) {
          display: block;
          border-bottom: 1px solid #eee;
          margin: 0;
          padding: 0;
          width: 100%;
        }
      `}
  }
  ${NavbarLink} {
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
      height: auto;
      padding: 8px 0;
      position: relative;
    }
  }
`

export const useNavbar = () => {
  const [collapsed, setCollapsed] = useState(true)
  return {
    collapsed,
    toggleCollapse: () => {
      setCollapsed(!collapsed)
    },
  }
}
export const Header = () => {
  const { collapsed, toggleCollapse } = useNavbar()
  return (
    <HeaderWrapper backgroundColor="primary" borderColor="primary">
      <Container>
        <HeaderRow>
          <HeaderColumn>
            <NavbarToggler collapsed={collapsed} onClick={toggleCollapse}>
              <NavbarToggleItem background="white" />
              <NavbarToggleItem background="white" />
              <NavbarToggleItem background="white" />
            </NavbarToggler>
            <Navbar>
              <NavbarHeader collapse={collapsed}>
                <NavbarNav responsive={true}>
                  <NavbarItem>
                    <NavbarLink>Envoyer un kikoo</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                    <NavbarLink>Pourquoi Kikoo ?</NavbarLink>
                  </NavbarItem>
                </NavbarNav>
              </NavbarHeader>
            </Navbar>
          </HeaderColumn>
          <HeaderColumn alignItems="flex-end" justifyContent="flex-end">
            <Navbar responsive={false}>
              <NavbarNav>
                <NavbarItem padding={2} marginLeft={1} marginRight={2}>
                  <PrimaryButton>S'inscrire</PrimaryButton>
                </NavbarItem>
                <NavbarItem padding={2}>
                  <PrimaryButton>Connexion</PrimaryButton>
                </NavbarItem>
              </NavbarNav>
            </Navbar>
          </HeaderColumn>
        </HeaderRow>
      </Container>
    </HeaderWrapper>
  )
}
