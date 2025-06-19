import React, { useState } from "react";



export const Home: React.FC = () => {
  return (
    <div>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">こんにちは、えめっとです！</h1>
          <p className="text-gray-700 text-lg">
            開発の勉強のため、ホームページを作りました！
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
        </section>
      </main>
    </div>
  );
};