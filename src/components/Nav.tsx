import { connect, ConnectedProps } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/navigation';
import { Link } from 'react-scroll';

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>;

type NavProps = {
  sections: any[]
}

type AllProps = NavProps & PropsFromRedux;

function Nav({ sections }: AllProps) {
  return (
    <div className="lg:grid gap-3 relative hidden">
      {/* Header */}
      <div className="flex place-items-center mt-4 mx-auto prose">
        {/* <div className="rounded-full flex-shrink-0 bg-blue-700 h-8 w-8" /> */}
        <h2 className="font-semibold">
          Rafael Cortes Mazzillo
        </h2>
      </div>

      {/* Nav Items */}
      <div className="mx-auto m-2 flex flex-row space-x-6 text-gray-500 font-medium text-xl">
        {sections.map(({ target, label }, index) => (
          <Link key={index} activeClass="border-b-4 border-gray-800 transform scale-105 translate-y-1 text-gray-900 transition duration-500 ease-in-out" to={target} offset={0} hashSpy={true} spy={true} smooth={true} duration={800} containerId="content">
            <div className="px-4 py-2 transform hover:translate-y-1 hover:scale-105 cursor-pointer transition duration-500 ease-in-out">
              {label}
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute z-10 w-full top-full h-32 bg-gradient-to-b from-gray-100" />
    </div>
  )
}

export default connector(Nav)
