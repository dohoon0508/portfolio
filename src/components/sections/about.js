import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1200px;
  background-color: white;
  border-radius: 12px;
  padding: 60px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    padding: 50px 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
    margin-bottom: 20px;
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  color: #000000;

  p {
    color: #000000;
  }

  .highlight {
    color: var(--hero-accent);
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: #000000;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--primary-yellow);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--primary-blue);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--primary-blue);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['AI/ML', 'RAG', 'OpenAI API', 'Gemini API', 'Python', 'React'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">소개</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              문제나 비효율을 발견하고 AI를 통해 최적화하는 과정을 즐깁니다. 세명테크에서 품질 관리
              업무의 흐름을 분석하여,{' '}
              <span className="highlight">
                기존 6시간이 소요되던 프로세스를 AI 자동화로 10분 이내로 단축하였습니다.
              </span>
            </p>

            <p>
              인공지능 학술 동아리 JBIG에서 기술적 토대를 닦았으며, 이후 전국 단위 대회에서{' '}
              <span className="highlight">빅데이터 콘테스트</span>(Gemini RAG/멀티 에이전트 개발)와{' '}
              <span className="highlight">데이터 크리에이터</span> 캠프(모델 성능 향상) 수상하며
              실전 역량을 입증했습니다. 창업 동아리 해시태그를 시작으로 창업 관련 대회 수상 및{' '}
              <span className="highlight">SW학생창업지원</span>을 통해 OpenAI API 기반의 학습 보조
              서비스를 개발하였습니다.
            </p>

            <p>
              이외에도 5,000명의 팔로워를 보유한 맛집 인스타그램 운영과 의류 브랜드 창업 등을 통해
              사용자의 반응을 읽고 시장의 흐름을 파악하는 감각을 익혀왔습니다.
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
