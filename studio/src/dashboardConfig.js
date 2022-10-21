export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63525fa6d6b4866928867429",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8hu2dg9f",
                  apiId: "ac0afd70-a14f-4a20-9c38-5f5bc147e5e6",
                },
                {
                  buildHookId: "63525fa78f87b568b7bc5365",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-t7r7ww2c",
                  apiId: "7249e5ba-0972-4136-b181-60397725c78a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/paalharald/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-t7r7ww2c.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
