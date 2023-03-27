import { Button } from "antd";

export default function ButtonExample() {
  return (
    <>
      <Button type="dashed" danger>
        Button
      </Button>
      <Button type="primary">Button</Button>
      <Button type="primary" ghost={true}>
        Button
      </Button>
    </>
  );
}
