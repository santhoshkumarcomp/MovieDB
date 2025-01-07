import { useParams } from "react-router";

const WatchList = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Welcome to watchlist {id}</h1>
    </div>
  );
};

export default WatchList;
