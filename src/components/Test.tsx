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

      {!loading && <button onClick={() => fetchData()}>
        Button test
      </button>}
    </div>
  )
}

export default connector(Test)


