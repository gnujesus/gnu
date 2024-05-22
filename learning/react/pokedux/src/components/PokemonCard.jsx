import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { StarOutlined } from '@ant-design/icons';

export default function PokemonCard({ name, url }) {
  return (
    <Card
      style={{ width: 400 }}
      title={name}
      extra={<StarOutlined />}
      cover={
        <img
          src={url}
          alt={name}
        />
      }>
      <Meta description='fat, magic' />
    </Card>
  );
}
