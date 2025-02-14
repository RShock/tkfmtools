import React from "react";
import styled from "styled-components";
import { HeaderIconButton } from "components/IconButton";
import { HelpIcon } from "components/icon";

const Header = ({
  className,
  title,
  titleIcon,
  withHelp,
  onClickHelp,
  end,
  id,
  border,
}) => (
  <StyledHeader className={className} $border={border}>
    <TitleWrapper>
      <span id={id}>
        {titleIcon}
        {title}
      </span>
      {withHelp && onClickHelp && (
        <HeaderIconButton onClick={onClickHelp} tooltipText="Help">
          {HelpIcon}
        </HeaderIconButton>
      )}
    </TitleWrapper>
    {end && <div>{end}</div>}
  </StyledHeader>
);

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  height: 2.2rem;
  ${(props) =>
    props.$border
      ? `border-bottom: solid 1px ${props.theme.colors.border};`
      : ""}
  color: ${(props) => props.theme.colors.onSurface};
  font-size: large;
  font-weight: normal;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    svg {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.4rem;
      margin-bottom: 0.2rem;
      fill: ${(props) => props.theme.colors.onSurface};
    }
  }
`;

export default Header;
