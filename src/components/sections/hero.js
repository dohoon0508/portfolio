import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  background: transparent !important;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .hero-subline {
    font-size: clamp(1.25rem, 3.5vw, 2rem);
    font-weight: 600;
    line-height: 1.5;
    color: var(--dark-slate);
    margin: 0 0 0.5em;

    .highlight {
      color: var(--hero-accent);
    }
  }

  .hero-headline {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.35;
    color: var(--dark-slate);
    margin: 0;

    .highlight {
      color: var(--hero-accent);
    }

    .highlight-name {
      display: inline-block;
      padding: 0 0.05em;
      background: linear-gradient(to right, #1e3a8a, #3b82f6, #70b0f3);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }

  .hero-body {
    margin: 24px 0 0;
    max-width: 560px;
    font-size: var(--fz-lg);
    font-weight: 500;
    line-height: 1.85;
    color: var(--dark-slate);

    strong {
      font-weight: 700;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 40px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h2 className="hero-subline">
      숨겨진 비효율을 찾아내고 <span className="highlight">AI</span>로 해결책을 만듭니다.
    </h2>
  );
  const two = (
    <h1 className="hero-headline">
      <span className="highlight-name">개발하는 기획자,</span> 황도훈입니다.
    </h1>
  );
  const three = (
    <p className="hero-body">
      <strong>더 나은 흐름을 고민하고 AI로 직접 구현하는 과정에서 즐거움을 얻습니다.</strong>
      <br />
      6시간의 반복 업무를 10분으로 단축하는 과정은 단순한 기능 구현을 넘어, 비즈니스의 빈틈을
      채워가는 즐거운 과정이었습니다. 기술적 호기심을 실질적인 가치로 변환하며, 정답을 찾아가는
      몰입의 즐거움을 아는 기획자입니다.
    </p>
  );
  const four = (
    <a className="email-link" href={`mailto:${email}`}>
      연락하기
    </a>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection id="hero">
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
