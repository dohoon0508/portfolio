module.exports = {
  email: 'dohoon0508l@google.com', // 실제 이메일 주소로 변경해주세요

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dohoon0508',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dohoon_i',
    },
    {
      name: 'Velog',
      url: 'https://velog.io/@dohoon0508',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dohoon-hwang-86736733a/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },
  ],

  navLinks: [
    {
      name: '소개',
      url: '/#about',
    },
    {
      name: '이력',
      url: '/#jobs',
    },
    {
      name: '프로젝트',
      url: '/#projects',
    },
    {
      name: '연락',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
