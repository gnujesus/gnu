import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from "@ant-design/icons";

export default function PokemonCard({ name }) {
  return (
    <Card
      style={{ width: 400 }}
      title={name}
      extra={<StarOutlined />}
      cover={
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'
          alt={name}
        />
      }>
      <Meta description='fat, magic' />
    </Card>
  );
}
