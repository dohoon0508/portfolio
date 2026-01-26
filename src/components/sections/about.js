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

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">소개</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              안녕하세요! 제 이름은 DoHoon이고 인터넷에 존재하는 것들을 만드는 것을 즐깁니다.
              웹 개발에 대한 제 관심은 2012년 커스텀 Tumblr 테마를 편집해보기로 결정했을 때 시작되었습니다
              — 커스텀 리블로그 버튼을 만들어보면서 HTML &amp; CSS에 대해 많이 배웠습니다!
            </p>

            <p>
              지금까지 저는{' '}
              <a href="https://us.mullenlowe.com/">광고 대행사</a>,{' '}
              <a href="https://starry.com/">스타트업</a>,{' '}
              <a href="https://www.apple.com/">대기업</a>, 그리고{' '}
              <a href="https://scout.camd.northeastern.edu/">학생 주도 디자인 스튜디오</a>에서 일할 기회를 가졌습니다.
              요즘은 다양한 클라이언트를 위해 접근 가능하고 포용적인 제품과 디지털 경험을 만드는 데 집중하고 있습니다.
            </p>

            <p>
              최근에는 Node &amp; React를 사용하여 Spotify API로 웹 앱을 구축하는 데 필요한 모든 것을 다루는{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                강의를 출시
              </a>
              했습니다.
            </p>

            <p>최근에 작업하고 있는 기술들입니다:</p>
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
