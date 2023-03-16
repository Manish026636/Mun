import { useState } from 'react';
import LargeTab from './Tabs/LargeTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
    <div className=" container mx-auto mt-20 flex flex-col md:flex-row">
      <div className="md:w-1/4">
        <ul className="flex border-b">
          <li
            className={`-mb-px mr-1 ${activeTab === 0 ? 'border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:border-gray-400'}`}
            onClick={() => handleTabClick(0)}
          >
            <a
              className={`bg-white rounded-t-lg inline-block py-2 px-4 font-semibold ${activeTab === 0 ? 'text-blue-700' : 'text-gray-500 hover:text-gray-800'}`}
              href="#"
            >
             GSL
            </a>
          </li>
          <li
            className={`mr-1 ${activeTab === 1 ? 'border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:border-gray-400'}`}
            onClick={() => handleTabClick(1)}
          >
            <a
              className={`bg-white rounded-t-lg inline-block py-2 px-4 font-semibold ${activeTab === 1 ? 'text-blue-700' : 'text-gray-500 hover:text-gray-800'}`}
              href="#"
            >
           MD
            </a>
          </li>
          <li
            className={`mr-1 ${activeTab === 2 ? 'border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:border-gray-400'}`}
            onClick={() => handleTabClick(2)}
          >
            <a
              className={`bg-white rounded-t-lg inline-block py-2 px-4 font-semibold ${activeTab === 2 ? 'text-blue-700' : 'text-gray-500 hover:text-gray-800'}`}
              href="#"
            >
              UNMD
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div className="flex mt-10 flex-col md:flex-row">

      <div className="container mx-auto md:w-3/4">
        <div className="p-4">
          {activeTab === 0 && (
            <div>
              <LargeTab/>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <p>Content of Tab 2</p>
              <p>Add new components here</p>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <p>Content of Tab 3</p>
              <p>Add new components here</p>
            </div>
          )}
        </div>
      </div>
      </div>
      </>
  );
};

export default Tabs;
