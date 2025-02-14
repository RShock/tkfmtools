import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useLanguage } from "containers/LanguageProvider";

const WrappedLink = ({ to, disableLocale, decoration, ...rest }) => {
  const { userLanguage, isDefault } = useLanguage();

  const isIndex = to === "/";

  const path =
    disableLocale || isDefault
      ? to
      : isIndex
      ? `/${userLanguage}`
      : `/${userLanguage}${to}`;

  return <StyledLink $decoration={decoration} {...rest} to={path} />;
};

const StyledLink = styled(Link)`
  &:hover {
    ${(props) => (props.$decoration ? null : "text-decoration: none;")}
  }
`;

// pass ref down
const LocalizedLink = React.forwardRef((props, ref) => (
  // Link use innerRef as ref name
  <WrappedLink {...props} innerRef={ref} />
));

export default LocalizedLink;
