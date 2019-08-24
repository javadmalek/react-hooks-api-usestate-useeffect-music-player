import styled from "styled-components";

export const FlexboxDiv = styled.div`
    display: flex;
    ${({ alignItems = "flex-start" }) => `align-items:${alignItems};`}
    ${({ justifyContent = "flex-start" }) =>
      `justify-content:${justifyContent};`}
    ${({ flexDirection = "row" }) => `flex-direction:${flexDirection};`}
    ${({ flexWrap = "nowrap" }) => `flex-wrap:${flexWrap};`}
    ${({ flexGrow = 1 }) => `flex:${flexGrow};`}
    ${({ bgUrl }) =>
      bgUrl &&
      `background: url("${bgUrl}") no-repeat center center ; background-size: contain; background-color: #eee;`}
    ${({ marginRight }) => marginRight && "margin-right: 1em;"}
    ${({ dimension1 }) =>
      dimension1 &&
      "min-height : 15em; max-height: 15em; min-width: 10em; max-width: 10em;"}
    ${({ borderRadius }) => borderRadius && "border-radius: 5px;"}
    ${({ position }) => position && `position: ${position};`}
    ${({ w100 }) => w100 && "width: 100%;"}
    ${({ h15e }) => h15e && "height: 15em;"}
`;

export const TextTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  ${({ paddingTBS }) => paddingTBS && "padding: 0.5em 0;"}
`;
export const TextSubtitle = styled.span`
  font-size: 0.75rem;
  ${({ paddingTBS }) => paddingTBS && "padding: 0.5em 0;"}
`;
