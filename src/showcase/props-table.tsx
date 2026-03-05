interface Prop {
  name: string
  type: string
  default?: string
  description: string
}

interface PropsTableProps {
  props: Prop[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 pr-4 font-medium">Prop</th>
            <th className="text-left py-3 pr-4 font-medium">Type</th>
            <th className="text-left py-3 pr-4 font-medium">Default</th>
            <th className="text-left py-3 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b last:border-0">
              <td className="py-3 pr-4 font-mono text-accent">{prop.name}</td>
              <td className="py-3 pr-4 font-mono text-muted-foreground">{prop.type}</td>
              <td className="py-3 pr-4 font-mono text-muted-foreground">{prop.default ?? "—"}</td>
              <td className="py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
