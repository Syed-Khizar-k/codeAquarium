/**
 * Renders one or more schema.org JSON-LD graphs into a <script> tag.
 * Server component — the markup ships in the initial HTML so crawlers and
 * LLMs see it without executing JavaScript.
 */
type JsonLdProps = {
  /** A single schema object, or an array that becomes an @graph. */
  schema: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export default function JsonLd({ schema, id }: JsonLdProps) {
  const json = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema.map(stripContext) }
    : schema;

  return (
    <script
      id={id}
      type="application/ld+json"
      // Content is built from our own typed data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/** Inside an @graph the top-level @context is redundant; drop it per node. */
function stripContext(node: Record<string, unknown>) {
  if (!node || typeof node !== "object") return node;
  const { ["@context"]: _omit, ...rest } = node;
  return rest;
}
