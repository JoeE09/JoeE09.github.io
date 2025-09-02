import type { Root, RootContent } from "mdast";
import { parseMarkdownToJsxAst } from "../../scripts/parser";

function renderIconAttributions(tree: RootContent | Root, isBold=false, inList = false) {

  if (tree.type === "root") {
    return (
      <div className="max-w-2xl mx-auto">
        {tree.children.map((child, index) => (
          <div key={index}>
            {renderIconAttributions(child)}
          </div>
        ))}
      </div>
    );
  }
  if (tree.type === "list") {
    // Render the list
    return (
      <ul className="list-disc list-outside ml-8">
        {tree.children.map((item) => (
          renderIconAttributions(item, isBold, true)
        ))}
      </ul>
    );
  }
  if (tree.type === "listItem") {
    // Render the list
    return (
      <li>
        {tree.children.map((item) => (
          renderIconAttributions(item, isBold, inList)
        ))}
      </li>
    );
  }
  if (tree.type === "heading") {
    return (
      <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center">
        {tree.children.map((child) => (
          renderIconAttributions(child, isBold, inList)
        ))}
      </h3>
    );
  }
  if (tree.type === "paragraph") {
    return (
      <p className={`${inList ? "mt-2" : "mt-4"}`}>
        {tree.children.map((child) => (
          renderIconAttributions(child, isBold, inList)
        ))}
      </p>
    );
  }
  if (tree.type === "link") {
    return (
      <a href={tree.url} className={`${isBold ? "text-customGreen" : "text-gray-500"} underline`} target="_blank" rel="noopener noreferrer">
        {tree.children.map((child) => (
          renderIconAttributions(child)
        ))}
      </a>
    );
  }
  if (tree.type === "strong") {
    return <span className="font-semibold text-customGreen">
      {tree.children.map((child) => renderIconAttributions(child, true))}
    </span>;
  }
  if (tree.type === "emphasis") {
    return <span className="font-italic text-customGreen">
      {tree.children.map((child) => renderIconAttributions(child))}
    </span>;
  }
  if (tree.type === "text") {
    return <span> {tree.value}</span>;
  }
}

export default function IconAttributions() {

  const tree = parseMarkdownToJsxAst(`Many of the icons on the site are sourced from:

- **[Lucide](https://lucide.dev/)**  
  Licensed under the [ISC License](https://opensource.org/licenses/ISC).  
  Portions © 2013–2022 Cole Bemis (Feather) and © 2022–present Lucide Contributors.

- **[Tabler Icons](https://tabler.io/icons)**  
  Licensed under the [MIT License](https://opensource.org/licenses/MIT).  
  © 2021 Paweł Kuna.

- **[Simple Icons](https://simpleicons.org/)**  
  Licensed under the [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/).  
  © Simple Icons Contributors.

Flowchart icons may have been modified for size, color, or format.

**Individual attributions:**
- Raspberry Pi is a trademark of Raspberry Pi Ltd.

Brand-related icons are used under nominative fair use for educational purposes and are not modified.
Other brand-related icons replaced with generic alternatives due to copyright/trademark restrictions.

This repository is licensed under the CC BY 4.0 License. Feel free to use or adapt this format or content with proper attribution.`
  );
  console.log(JSON.stringify(tree, null, 2));
  return (
    <div>
       <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center">Icon Licensing and Attribution</h3>
    {renderIconAttributions(tree)}
    </div>);
  // return (
  //   <div>
  //     <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center">Icon Licensing and Attribution</h3>
  //     <p>Many of the icons on the site are sourced from:</p>
  //     <ul>
  //       <li>
  //         <strong>
  //           <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">Lucide</a>
  //         </strong>
  //         <br />
  //         Licensed under the <a href="https://opensource.org/licenses/ISC" target="_blank" rel="noopener noreferrer">ISC License</a>.<br />
  //         Portions © 2013–2022 Cole Bemis (Feather) and © 2022–present Lucide Contributors.
  //       </li>
  //       <li>
  //         <strong>
  //           <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a>
  //         </strong>
  //         <br />
  //         Licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.<br />
  //         © 2021 Paweł Kuna.
  //       </li>
  //     </ul>
  //     <p>Flowchart icons may have been modified for size, color, or format.</p>
  //     <p>
  //       Some brand-related icons (Python, GitHub, etc.) are used under fair use for educational purposes and are not modified.<br />
  //       Other brand-related icons replaced with generic alternatives due to copyright/trademark restrictions.
  //     </p>
  //   </div>
  // );
}