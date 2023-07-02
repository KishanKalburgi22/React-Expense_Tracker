import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, index) => (
            <ListItem item={item} key={item.name + index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
