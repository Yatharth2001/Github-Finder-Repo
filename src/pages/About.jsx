function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <h2 className="text-3xl mb-4">About This App</h2>
      <ul className="list-disc list-inside space-y-2 ml-5">
        <li>Retrieved user data through an API and displayed profile pictures and usernames of all relevant users.</li>
        <li>Allowed users to click on individual profiles to see detailed information including repositories, followers, following & etc.</li>
        <li>Enabled navigation to GitHub link of user.</li>
      </ul>
    </div>
  );
}

export default About;
