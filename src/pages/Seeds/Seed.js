import {useParams} from 'react-router-dom';

function Seed() {
    let { params } = useParams()
    let { seedId } = params.id;
    return <h3>Requested seed ID: {seedId}</h3>;
  }

export default Seed;