const Info = ({ pointingGentleman }) => {
  let text = `${pointingGentleman} gentleman pointing at you`;
  return <p text={text} className="info"></p>;
};

export default Info;
