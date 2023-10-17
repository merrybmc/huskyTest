module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러줄 공백 금지
    // 'no-console': ['error', {allow: ['warn', 'error', 'info']}], // console 금지
    eqeqeq: 'error', // 일치연산자 사용 필수
    'react/jsx-pascal-case': 'error', // 컴포넌트 이름 pascal-case 사용
    // 'react/jsx-key': 'error', // 반복 요소에 key 사용
    'dot-notation': 'error', // dot-notation 사용
    'linebreak-style': 0 // LF, CRLF 문제 해결
  }
};
