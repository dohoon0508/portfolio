import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 40px;
  text-align: center;
  background-color: white;
  border-radius: 12px;
  padding: 60px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  color: #000000;

  @media (max-width: 768px) {
    padding: 50px 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
    margin-bottom: 20px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--primary-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading">연락주세요</h2>

      <p>
        현재 새로운 기회를 찾고 있지는 않지만, 제 이메일은 항상 열려있습니다.
        질문이 있으시거나 그냥 인사하고 싶으시다면, 최선을 다해 답변드리겠습니다!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        인사하기
      </a>
    </StyledContactSection>
  );
};

export default Contact;
