const resourceCategories = [
  {
    title: "ChatGPT Use Cases and Experiences",
    resources: [
      {
        name: "This track could feature presentations from businesses and organizations that have used ChatGPT in their operations, discussing the challenges and successes they've encountered and the lessons they've learned",
      }
    ],
  },
  {
    title: "Real-World Applications of ChatGPT",
    resources: [
      {
        name: "This track could feature presentations on the various ways in which ChatGPT can be applied in the real world, such as in customer service, content creation, and language translation.",
      }
    ],
  }, 
  {
    title: "Natural Language Processing",
    resources: [
      {
        name: "This track could include presentations and discussions on the latest advancements in NLP, such as language models, text generation, sentiment analysis, and dialogue systems",
      }
    ],
  },
  {
    title: "Ethics and Governance of AI",
    resources: [
      {
        name: "This track could explore the ethical and governance implications of AI and NLP, discussing the issues and challenges that arise when implementing these technologies in the real world.",
      }
    ],
  },
  {
    title: "AI and Machine Learning",
    resources: [
      {
        name: "This track could include presentations on the broader field of AI, including machine learning, deep learning, and computer vision",
      }
    ],
  },
 
];

export default function Resources() {
  return (
    <div className="section container border-t border-gray-700 pt-6">
      <h2 className="title text-3xl md:text-5xl">Tracks for the ChatGPT Conference</h2>
      <div className="mt-6 grid gap-16 pt-6 md:grid-cols-2">
        {/* Resource Category */}
        {resourceCategories.map((resourceCategory, i) => {
          return (
            <div
              className="border-t border-gray-300 pt-4 dark:border-gray-700"
              key={i}
            >
              <h2 className="title mb-3 text-3xl">{resourceCategory.title}</h2>
              <ul className="list-inside list-disc">
                {/* Resources List */}
                {resourceCategory.resources.map((resource, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={resource.url}
                        className="link no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
