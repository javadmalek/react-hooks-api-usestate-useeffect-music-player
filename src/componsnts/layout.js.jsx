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
      borderColor && `border-color: lighten(#34495E, 10%);`}
    ${({ borderRadius }) => borderRadius && `border-radius: 0.4em;`}
    ${({ backgroundDark }) => backgroundDark && `background: #34495E;`}
    ${({ bgUrl }) =>
      bgUrl &&
      `background: url("${bgUrl}") no-repeat center center ; background-size: contain; background-color: #eee;`}
    
    ${({ colorGold }) => colorGold && `color: #dd5;`}
    
    ${({ marginRight }) => marginRight && "margin-right: 1em;"}
    ${({ paddingDefault }) => paddingDefault && "padding: 1em;"}
    ${({ paddingTBDefault }) => paddingTBDefault && "padding: 2em 0;"}
    ${({ paddingTBS }) => paddingTBS && "padding: 0.5em 0;"}
    ${({ paddingDefault }) => paddingDefault && "margin: 0 1em;"}

    ${({ borderRadius }) => borderRadius && "border-radius: 5px;"}
    
    ${({ position }) => position && `position: ${position};`}
    ${({ dimension1 }) =>
      dimension1 &&
      "min-height : 15em; max-height: 15em; min-width: 10em; max-width: 10em;"}
      ${({ dimension2 }) =>
        dimension2 &&
        "min-height : 15em; max-height: 15em; min-width: 15em; max-width: 15em;"}
    ${({ w100 }) => w100 && "width: 100%;"}
    ${({ h15e }) => h15e && "height: 15em;"}
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
