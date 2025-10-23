"use client";

import { useState } from "react";

export default function ScopeTabs({ items }) {
  const [active, setActive] = useState(items[0]?.label ?? "");

  const current = items.find((item) => item.label === active) ?? items[0];

  return (
    <div className="scope">
      <div className="scope-tabs" role="tablist">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            aria-selected={active === item.label}
            className={active === item.label ? "active" : ""}
            onClick={() => setActive(item.label)}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="scope-panel" role="tabpanel">
        <div className="scope-panel__header">
          <h3>{current.title}</h3>
          <p>{current.description}</p>
        </div>
        <ul>
          {current.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
