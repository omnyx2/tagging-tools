export function HeadCell({ item, idx, type }) {
  const cellName = `${type} cell m-2`;

  return (
    <th
      scope="col"
      className={ cellName + " text-sm font-medium text-gray-900 px-6 py-4 text-left"}
      key={item + idx}
      className=
    >
      {item}
    </th>
  );
}

export function HeadRow({ data, idx, type, handleClick }) {
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
