import { useState } from 'react';

function Planner() {
  const [topics, setTopics] = useState([
    'Mensuration',
    'Gravitation',
    'Current Affairs',
    'Geometry',
    'Indian Polity',
    'Electrostatics',
    'Probability'
  ]);
  const [completed, setCompleted] = useState([]);

  const toggleTopic = (topic) => {
    if (completed.includes(topic)) {
      setCompleted(completed.filter(t => t !== topic));
    } else {
      setCompleted([...completed, topic]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-indigo-700 px-6 py-3 rounded-xl shadow-md">
        NDA Planner Checklist 📝⚔️
      </h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-sm text-indigo-300 mb-4">
          Tap a topic when it’s done to track progress. You’ve got this, cadet!
        </p>

        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-2 rounded-lg border ${
                completed.includes(topic)
                  ? 'bg-green-700 border-green-500 line-through text-gray-300'
                  : 'bg-gray-700 border-indigo-500 hover:bg-indigo-600'
              }`}
              onClick={() => toggleTopic(topic)}
            >
              {topic}
            </li>
          ))}
        </ul>

        <div className="mt-6 text-green-400">
          {completed.length === topics.length
            ? '✅ All topics completed!'
            : `✅ ${completed.length}/${topics.length} done — keep pushing!`}
        </div>
        {/* 📊 Progress Bar */}
<div className="w-full h-4 mt-2 bg-gray-700 rounded overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-green-500 to-indigo-500"
    style={{
      width: `${(completed.length / topics.length) * 100}%`,
      transition: 'width 0.4s ease',
    }}
  />
</div>
      </div>
    </div>
  );
}

export default Planner;
