// app/not-found.tsx
import React from 'react';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Court's Out! The Verdict: Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">It seems like you've been sentenced to a missing page.</p>

        {/* Image or Icon */}
        <img
          src="/court-gavel.png" // Use a gavel or any judicial-themed image
          alt="Court Gavel"
          className="w-40 h-40 mb-6"
        />

        <div className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Judicial Humor to Lighten the Sentence</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>"Why don’t judges ever get lost? They always know where the court is!"</li>
            <li>"I tried to sue the airport for misplacing my luggage, but I lost the case."</li>
            <li>"Why did the judge bring a pencil to court? In case they had to draw a conclusion!"</li>
            <li>"A lawyer walked into a bar... but quickly exited, realizing it was a case of mistaken identity."</li>
            <li>"The courtroom was silent... until the gavel dropped. It was a hammer time moment!"</li>
          </ul>
        </div>

        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            Return to Court (Home Page)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
