import { useSelector } from "React-redux";
import { Card, Avatar } from "antd";
import moment from "moment";

const { Meta } = Card;

const ConnectNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;

  return (
    <>
      <div className="d-flex justify-content-around user-card">
        <Card>
          <Meta avatar={<Avatar>{user.firstName[0] + user.lastName[0]}</Avatar>} 
              title={user.firstName + " " + user.lastName}  
              description={`Joined ${moment(user.createdAt).fromNow()}`}
          />
        </Card>
      </div>
    </>
  );
};

export default ConnectNav;