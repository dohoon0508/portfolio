import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg,
      img {
        width: 20px;
        height: 20px;
      }
      /* Velog 아이콘: 호버 시 다른 아이콘처럼 파란색으로 */
      .icon-velog {
        filter: brightness(0) saturate(100%); /* 기본: 회색톤 */
        transition: filter var(--transition);
      }
      &:hover .icon-velog,
      &:focus .icon-velog {
        filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%)
          hue-rotate(226deg) brightness(104%) contrast(97%);
      }
    }
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
