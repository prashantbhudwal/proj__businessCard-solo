import styled from "@emotion/styled";

const getButtonColor = function (primary: any) {
  return "brown";
};
// Not adding this gives an error
interface ButtonProps {
  backgroundColor: string;
  color: string;
}

const StyledIconButton = styled.button<ButtonProps>`
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  color: ${(props: any) => props.color};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  min-width: 100px;
  padding: 0.7em 1.5em;
  background-color: ${(props: any) => props.backgroundColor};

  & .label {
    font-size: 1rem;
  }
  & .icon {
    font-size: 0.9rem;
  }
`;

const IconButton = ({ backgroundColor, color, icon, href, children }: any) => {
  return (
    <a href={href}>
      <StyledIconButton backgroundColor={backgroundColor} color={color}>
        <div className="icon">{icon}</div>
        <div className="label">{children}</div>
      </StyledIconButton>
    </a>
  );
};

export default IconButton;
