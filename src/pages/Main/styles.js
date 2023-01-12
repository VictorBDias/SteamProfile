import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 80px;
  background: #202020;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 15px;

  img {
    margin-left: 48px;
    width: 125px;
    height: 30px;
  }
`;

export const Body = styled.div`
  display: flex;
`;

export const Form = styled.form`
  width: 500px;
  height: 40px;
  display: flex;
  margin-left: 50%;
  margin-right: 40px;
  margin-top: 4px;

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
  margin-left: 27%;
  margin-top: 60px;
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
    color: #ffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 24px;
  }

  h2 {
    color: #48d9f5;
    text-decoration: dashed;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 8px;
  }

  h3 {
    color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Group = styled.div`
  margin-bottom: 16px;
`;

export const GroupPod = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  display: flex;
  align-items: center;

  h4 {
    margin-top: 16px;
    color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  img.podIcon {
    margin-left: 20px;
    height: 40px;
    width: 48px;
  }
`;

export const PodiumGames = styled.div`
  flex-direction: column;
  margin-top: 60px;
  margin-left: 72px;
`;

export const PodiumGame = styled.div`
  display: flex;
  height: 69px;
  align-items: center;
  width: 420px;
  border-radius: 4px;
  margin-bottom: 16px;
  flex-direction: row;
  background-color: rgba(112, 112, 112, 0.3);

  img {
    border-radius: 4px 0 0 4px;
    margin-right: 16px;
    margin-left: 16px;
  }

  svg {
  }

  h2 {
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 8px;
  }

  h4 {
    margin-top: 16px;
    color: #fafafa;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const NoPlayer = styled.div`
  img {
    height: 100%;
    width: 100%;
    opacity: 15%;
  }
`;
