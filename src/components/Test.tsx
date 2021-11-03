import { connect, ConnectedProps } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/navigation';

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TestProps {
  // write your props here
}

type AllProps = TestProps & PropsFromRedux;

function Test({ activeSection, fetchData, loading }: AllProps) {
  return (
    <div>
      The active section is {activeSection}

      <button disabled={loading} className="btn" onClick={() => fetchData()}>
        {loading ? 'Loading' : 'Fetch'}
      </button>

      <button disabled={loading} className="btn btn-blue" onClick={() => fetchData()}>
        {loading ? 'Loading' : 'Fetch'}
      </button>

      <button disabled={loading} className="btn btn-red" onClick={() => fetchData()}>
        {loading ? 'Loading' : 'Fetch'}
      </button>
    </div>
  )
}

export default connector(Test)


