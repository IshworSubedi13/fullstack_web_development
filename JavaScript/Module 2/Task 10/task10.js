 const numberOfCandidates = parseInt(prompt("Enter the number of candidates:"));
    const candidates = [];
    for (let i = 0; i < numberOfCandidates; i++) {
      const name = prompt(`Name of candidate ${i + 1}:`).trim();
      candidates.push({
        name: name,
        votes: 0
      });
    }
    console.log("Initial candidates array:");
    console.log(candidates);
    const numberOfVoters = parseInt(prompt("Enter the number of voters:"));
    for (let i = 0; i < numberOfVoters; i++) {
      const vote = prompt(`Voter ${i + 1}, enter the candidate name (or leave empty for no vote):`).trim();
      if (vote === "") {
        continue;
      }

      const candidate = candidates.find(c => c.name === vote);
      if (candidate) {
        candidate.votes++;
      } else {
        console.log(`Invalid vote: ${vote} (no such candidate)`);
      }
    }
    candidates.sort((a, b) => b.votes - a.votes);
    if (candidates.length > 0) {
      console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
    }
    console.log("results:");
    candidates.forEach(c => {
      console.log(`${c.name}: ${c.votes} votes`);
    });