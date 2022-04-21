import GridLayout from "react-grid-layout";
export function Table({ data }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Last
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    2
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Jacob
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Thornton
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                </tr>
                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    3
                  </td>
                  <td
                    colspan="2"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    Larry the Bird
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @twitter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Rows({ data, type, handleClick }) {
  const rowsName = `${type} row`;
  console.log(data);
  return (
    <div className={`${rowsName} flex-rows `}>
      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <tbody className="bg-white border-b">
                  {data?.map((e, i) => (
                    <Row
                      data={e}
                      idx={i}
                      type={type}
                      onClick={(event) => handleClick(event, e, i)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Row({ data, idx, type, handleClick }) {
  const rowName = `${type} row`;

  return (
    <tr className="bg-white border-b">
      <div className={`${rowName} flex `}>
        {data?.map((e, i) => (
          <Cell item={e} idx={i} type={type} />
        ))}
      </div>
    </tr>
  );
}

export function WhiteRow({ data, idx, type, handleClick }) {
  const rowName = `${type} row`;

  return (
    <tr className="bg-white border-b">
      <div className={`${rowName} flex `}>
        {data?.map((e, i) => (
          <Cell item={e} idx={i} type={type} />
        ))}
      </div>
    </tr>
  );
}

export function GrayRow({ data, idx, type, handleClick }) {
  const rowName = `${type} row`;

  return (
    <tr className="bg-white border-b">
      <div className={`${rowName} flex `}>
        {data?.map((e, i) => (
          <Cell item={e} idx={i} type={type} />
        ))}
      </div>
    </tr>
  );
}

export function Cell({ item, idx, type }) {
  const cellName = `${type} cell m-2`;

  return (
    <th
      scope="col"
      className={
        cellName +
        "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
      }
      key={item + idx}
    >
      {item}
    </th>
  );
}
