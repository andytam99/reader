import { Props } from "../../posts";

export function getContent() {
  const promises: Promise<string>[] = Props.index.map((i) => {
    return fetch(`https://raw.githubusercontent.com/${i.link}`, {
      method: "GET",
    })
      .then((i) => i.text())
      .catch((err) => err);
  });

  return Promise.all(promises).then(
    (i) => {
      const content = i.join(" ");
      return {
        title: Props.title,
        subtitle: Props.subtitle,
        description: Props.description,
        index: Props.index,
        content: content,
      };
    },
    (err) => {
      return { error: "Error getting content" };
    }
  );
}
