import { Container, ContainerProps } from "@mui/material";
import { mainSpacingXStyle } from "components/shared/mainStyles";

export const style = {
  px: { ...mainSpacingXStyle },
};

interface IProps extends ContainerProps {
  children?: React.ReactNode;
  ariaLabel?: string;
  dataRef?: string;
  role?: string;
}

const HeaderFooterContainer = (props: IProps) => {
  const { children, ariaLabel, dataRef, role, sx, ...otherProps } = props;
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{ ...style, ...sx }}
      data-ref={dataRef}
      role={role}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </Container>
  );
};

export default HeaderFooterContainer;
