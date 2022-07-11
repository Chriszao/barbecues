import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';
import { useImperativeHandle } from 'react';
import { forwardRef, useState } from 'react';
import ReactDOM from 'react-dom';

import closeIcon from '../../assets/close_button.svg';
import * as S from './styles';

interface ModalProps {
  children: ReactNode;
  title: string;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children, title }, ref) => {
  const [open, setOpen] = useState(false);

  const closeOnEscapeKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    },
    []
  );

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscapeKeyDown, false);

    return () => {
      document.removeEventListener('keydown', closeOnEscapeKeyDown, false);
    };
  }, [closeOnEscapeKeyDown]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <>
          <S.Overlay
            onClick={() => setOpen(false)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
          >
            <S.Wrapper
              onClick={(event) => event.stopPropagation()}
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.3,
                },
              }}
            >
              <S.ModalHeader>
                <motion.h2
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.3,
                    },
                  }}
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  {title}
                </motion.h2>
                <img
                  onClick={() => setOpen(false)}
                  src={closeIcon}
                  height={24}
                  width={24}
                  className="modal-close-btn"
                />
              </S.ModalHeader>
              <S.ModalContent
              // initial={{ x: 100, opacity: 0 }}
              // animate={{
              //   x: 0,
              //   opacity: 1,
              //   transition: {
              //     delay: 0.3,
              //     duration: 0.3,
              //   },
              // }}
              // exit={{
              //   x: 100,
              //   opacity: 0,
              //   transition: {
              //     duration: 0.3,
              //   },
              // }}
              >
                {children}
              </S.ModalContent>
            </S.Wrapper>
          </S.Overlay>
        </>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root')!
  );
});

export { Modal };
