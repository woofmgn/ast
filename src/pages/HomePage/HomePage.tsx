import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { removeUserToken } from "../../utils/storage";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const onLogOut = () => {
    removeUserToken("token");
    navigate("/signin");
  };

  return (
    <>
      <Button type="primary" onClick={onLogOut}>
        Выйти
      </Button>
    </>
  );
};
