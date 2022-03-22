// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Props } from "../../posts";

type Data =
  | {
      title: string;
      subtitle: string;
      description: string;
      index: { name: string; link: string }[];
      content: string;
    }
  | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const promises: Promise<string>[] = Props.index.map((i) => {
    return fetch(`https://raw.githubusercontent.com/${i.link}`, {
      method: "GET",
    })
      .then((i) => i.text())
      .catch((err) => err);
  });

  Promise.all(promises).then(
    (i) => {
      const content = i.join(" ");
      res.status(200).json({
        title: Props.title,
        subtitle: Props.subtitle,
        description: Props.description,
        index: Props.index,
        content: content,
      });
    },
    (err) => {
      res.status(404).json({ error: "Error getting content" });
    }
  );
}
