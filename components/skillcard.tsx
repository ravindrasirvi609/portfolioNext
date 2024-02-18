export const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
      <div className="p-4 border rounded-md shadow-md bg-sky-500">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );