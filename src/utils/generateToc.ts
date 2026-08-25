import type { MarkdownHeading } from "astro";

export interface TocItem extends MarkdownHeading {
  children: TocItem[];
}

interface TocOptions {
  maxHeadingLevel?: number;
  minHeadingLevel?: number;
}

export function generateToc(
  headings: ReadonlyArray<MarkdownHeading>,
  { maxHeadingLevel = 4, minHeadingLevel = 2 }: TocOptions = {},
): TocItem[] {
  const toc: TocItem[] = [];
  const bodyHeadings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  for (const heading of bodyHeadings) injectChild(toc, { ...heading, children: [] });
  return toc;
}

function injectChild(items: TocItem[], item: TocItem): void {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    injectChild(lastItem.children, item);
  }
}