import styled from "styled-components";

const CardTitle = styled.div`
  padding: 36px 0 6px 12px;
  position: absolute;
  bottom: 0;
  width: 100%;

  background: rgba(255, 154, 92, 0);
  background: -moz-linear-gradient(
    top,
    rgba(255, 154, 92, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 154, 92, 0)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 154, 92, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 154, 92, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 154, 92, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 154, 92, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9a5c', endColorstr='#ffffff', GradientType=0 );
`;

export default CardTitle;
