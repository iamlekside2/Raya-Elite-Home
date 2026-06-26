import type { PriceTable as PriceTableType } from "@/lib/data";

/* Shared pricing table — maps any column/row shape from the blueprint. */
export default function PriceTable({
  table,
  accent,
}: {
  table: PriceTableType;
  accent: "navy" | "sage";
}) {
  const headBg = accent === "navy" ? "bg-[#002147]" : "bg-sage-deep";
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink/10">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className={`${headBg} text-cream`}>
            {table.columns.map((c, i) => (
              <th
                key={c}
                className={`px-5 py-3.5 text-[12.5px] font-bold uppercase tracking-wider ${
                  i === 0 ? "" : "text-center"
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-t border-ink/8 bg-paper transition-colors hover:bg-paper-2"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-[14px] align-top text-[14.5px] ${
                    ci === 0 ? "font-bold text-ink" : "text-center text-ink-soft"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
