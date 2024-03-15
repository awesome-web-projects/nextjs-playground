type ButtonProps = {
  name: string,
  component_name?: string
}

const defaultSomeType = {
    component_name: "component"
}

export default function ButtonInner(props: ButtonProps) {
  return (
    <>      
    <div className="w-48 relative rounded-lg p-2 flex border border-dashed border-gray-700">
        <div className="absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest left-4">
          <div className="rounded-full flex px-1.5 shadow-xl bg-gray-800 text-gray-300 animate-[rerender_1s_ease-in-out_1]">
            {props.component_name}
          </div>
        </div>
      <div className="flex gap-2">
        <div>{props.name}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="block w-4 animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </>
  );
}