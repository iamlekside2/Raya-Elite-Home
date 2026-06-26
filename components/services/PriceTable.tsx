import type { PriceTable as PriceTableType } from "@/lib/data";

/* Light pricing table — clean rows, no heavy colored header bar.
   accent only tints the header underline + the leading column. */
export default function PriceTable({
  table,
  accent,
}: {
  table: PriceTableType;
  accent: "navy" | "sage";
}) {
  const underline = accent === "navy" ? "border-[#002147]/35" : "border-sage-deep/45";
  const lead = accent === "navy" ? "text-[#002147]" : "text-sage-deep";
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[440px] border-collapse text-left">
        <thead>
          <tr className={`border-b-2 ${underline}`}>
            {table.columns.map((c, i) => (
              <th
                key={c}
                className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/55 ${
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
            <tr key={ri} className="border-b border-ink/8 last:border-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 text-[14px] ${
                    ci === 0
                      ? `font-semibold ${lead}`
                      : "text-center text-ink-soft"
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
