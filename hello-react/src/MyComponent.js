import PropTypes from 'prop-types';

const MyComponent = ({ name = '기본 이름' }) => {
  return (
    <div>안녕하세요, 제 이름은 {name}입니다</div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;

