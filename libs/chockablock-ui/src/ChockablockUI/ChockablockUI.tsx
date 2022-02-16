import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ChockablockUiProps {
  name?: string;
}

const StyledChockablockUI = styled.div`
  color: pink;
`;

export const ChockablockUI = (props: ChockablockUiProps) => (
  <StyledChockablockUI>
    <h1>Welcome to ChockablockUI, {props.name ?? 'Yuri'}!</h1>
  </StyledChockablockUI>
);
