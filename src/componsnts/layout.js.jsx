import styled from "styled-components";

export const FlexboxDiv = styled.div`
    display: flex;
    ${({ alignItems = "flex-start" }) => `align-items:${alignItems};`}
    ${({ justifyContent = "flex-start" }) =>
      `justify-content:${justifyContent};`}
    ${({ flexDirection = "row" }) => `flex-direction:${flexDirection};`}
    ${({ flexWrap = "nowrap" }) => `flex-wrap:${flexWrap};`}
    ${({ flexGrow = 1 }) => `flex:${flexGrow};`}
    ${({ flexBasis }) => flexBasis && `flex-Basis:${flexBasis};`}

    ${({ borderColor }) =>
      borderColor && "border-color: lighten(#34495E, 10%);"}
    ${({ borderRadius }) => borderRadius && "border-radius: 0.4em;"}
    ${({ backgroundDark }) => backgroundDark && "background: #34495E;"}
    ${({ bgUrl }) =>
      bgUrl &&
      `background: url("${bgUrl}") no-repeat center center ; background-size: contain; background-color: #eee;`}
    
    ${({ colorGold }) => colorGold && "color: #dd5;"}
    
    ${({ marginReset }) => marginReset && "margin: 0;"}
    ${({ marginRight }) => marginRight && "margin-right: 1em;"}
    ${({ paddingDefault }) => paddingDefault && "padding: 1em;"}
    ${({ paddingTBDefault }) => paddingTBDefault && "padding: 2em 0;"}
    ${({ paddingTBS }) => paddingTBS && "padding: 0.5em 0;"}
    ${({ paddingDefault }) => paddingDefault && "padding: 0 1em;"}

    ${({ borderRadius }) => borderRadius && "border-radius: 5px;"}
    
    ${({ position }) => position && `position: ${position};`}
    ${({ dimension1 }) =>
      dimension1 &&
      "min-height : 15em; max-height: 15em; min-width: 10em; max-width: 10em;"}
      ${({ dimension2 }) =>
        dimension2 &&
        "min-height : 15em; max-height: 15em; min-width: 15em; max-width: 15em;"}
        ${({ dimension3 }) =>
          dimension3 &&
          "min-height : 5em; max-height: 5em; min-width: 5em; max-width: 5em;"}
    ${({ w100 }) => w100 && "width: 100%;"}
    ${({ h15e }) => h15e && "height: 15em;"}

    @media (max-width: 480px) {
      ${({ mobileFlexColumn }) => mobileFlexColumn && "flex-direction: column;"}
      ${({ mobileAlignItems }) =>
        mobileAlignItems && `align-items: ${mobileAlignItems};`}
      ${({ mobileJustifyContent }) =>
        mobileJustifyContent && `justify-content: ${mobileJustifyContent};`}
      ${({ mobileDisplayNone }) => mobileDisplayNone && "display: none;"}
      ${({ mobileDimension3 }) =>
        mobileDimension3 &&
        "min-height : 3em; max-height: 3em; min-width: 3em; max-width: 3em;"}
      ${({ mobileWAuto }) => mobileWAuto && "width: auto;"}

    }

`;

export const TextTitle = styled.span`
  font-size: 1rem;
  font-weight: 400 ${({ fontBold }) => fontBold && "font-weight: 500;"}
    ${({ fontSizeS }) => fontSizeS && "font-size: 0.75rem;"}
    ${({ fontSizeL }) => fontSizeL && "font-size: 1.5rem;"}
    ${({ fontSizeXl }) => fontSizeXl && "font-size: 2.5rem;"}
    ${({ lineHeightL }) => lineHeightL && "line-height: 1.5;"}
    ${({ paddingTBS }) => paddingTBS && "padding: 0.5em 0;"}
    ${({ marginRightL }) => marginRightL && "margin-right: 1em;"};
`;
