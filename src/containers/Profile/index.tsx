import * as React from "react";
import ProfileImg from "../../components/ProfileImg";
import Button from "../../components/Button";
import Card from "../../components/Card";
const style = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  container: {
    padding: "10px",
  },
};

export default class Profile extends React.Component {
  public render() {
    return (
      <div style={style.container}>
        <div style={style.row}>
          <ProfileImg />
          <Button>Agregar</Button>
        </div>
        <div style={style.row}>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
        </div>
        <div style={style.row}>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" alt="" />
          </Card>
        </div>
      </div>
    );
  }
}
