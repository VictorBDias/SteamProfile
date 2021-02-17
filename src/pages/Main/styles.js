import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 80px;
  background: #242424;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

export const Form = styled.form`
  width: 500px;
  height: 40px;
  display: flex;
  margin-left: 50%;
  margin-right: 40px;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'input',
  disabled: props.loading,
}))`
  background-color: #f38fff;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  & [disabled] {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  max-width: 350px;
  margin-left: 32px;
  margin-top: 24px;
  flex-direction: column;
  padding: 15px;

  img {
    border-radius: 80px;
    height: 160px;
    width: 160px;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 24px;
    color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 16px;
  }
`;
