import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Overlay = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Wrapper = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 40rem;
    max-height: 38.375rem;
    overflow-y: scroll;
    overflow-x: hidden;
    background: ${theme.colors.primaryLightened};
    border-radius: 6px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    position: absolute;
  `}
`;

export const ModalContent = styled(motion.div)``;

export const ModalHeader = styled.header`
  img {
    position: absolute;
    top: 1rem;
    right: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
