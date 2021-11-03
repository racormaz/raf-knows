import { connect, ConnectedProps } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/navigation';
import { Link } from 'react-scroll';

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>;

type NavProps = {
  sections: any[]
}

type AllProps = NavProps & PropsFromRedux;

function Nav({ activeSection, fetchData, loading, sections }: AllProps) {
  return (
    <div className="pt-4 grid gap-3">
      {/* Header */}
      <div className="flex place-items-center space-x-4 px-4">
        <div className="rounded-full flex-shrink-0 bg-blue-700 h-8 w-8" />
        <h1 className="font-semibold">
          Rafael Cortes Mazzillo
        </h1>
      </div>

      {/* Nav Items */}
      <div className="grid gap-2">
        {sections.map(({ target, label }, index) => (
          <Link key={index} activeClass="bg-blue-200 shadow-lg" to={target} offset={0} hashSpy={true} spy={true} smooth={true} duration={800} containerId="content">
            <div className="font-medium text-gray-900 text-lg px-4 py-2 hover:bg-blue-200 hover:shadow-lg cursor-pointer transition duration-500 ease-in-out">
              {label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default connector(Nav)
