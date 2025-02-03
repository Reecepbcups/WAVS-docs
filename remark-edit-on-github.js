module.exports = function editOnGitHub(options) {
  const { repoBasePath = "https://github.com/username/repo/edit/main/" } =
    options || {};

  return (tree, file) => {
    // The MDX file path is typically stored in file.history[0].
    // For example, if your MDX is at "content/docs/my-page.mdx", that might appear here.
    const filePath = file.history?.[0] || "";

    // Build the full GitHub edit URL:
    const editUrl =
      repoBasePath + filePath.replace(/^.*?content\//, "content/");

    // Push a new paragraph node with a link at the bottom of the MDX.
    tree.children.push({
      type: "paragraph",
      children: [
        {
          type: "link",
          url: editUrl,
          children: [{ type: "text", value: "Edit on GitHub" }],
        },
      ],
    });
  };
};
