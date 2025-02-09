function calculateResults() {
  const categories = {
    tech: 0,
    engineering: 0,
    social: 0,
    management: 0
  };

  const answers = document.querySelectorAll('input[type="radio"]:checked');

  if (answers.length < 10) {
    alert("Please answer all questions before seeing results.");
    return;
  }

  answers.forEach(answer => {
    const value = answer.nextSibling.nodeValue.trim();
    if (value.includes("technology") || value.includes("technical") || value.includes("computers")) {
      categories.tech++;
    } else if (value.includes("building") || value.includes("designing") || value.includes("hands-on")) {
      categories.engineering++;
    } else if (value.includes("helping people") || value.includes("social impact") || value.includes("community")) {
      categories.social++;
    } else if (value.includes("managing") || value.includes("organizing") || value.includes("logistics")) {
      categories.management++;
    }
  });

  let recommendedCareer = "";
  const maxCategory = Object.keys(categories).reduce((a, b) => categories[a] > categories[b] ? a : b);

  switch (maxCategory) {
    case "tech":
      recommendedCareer = "You should consider a career in Technology, such as Software Engineering, Data Science, or Cybersecurity.";
      break;
    case "engineering":
      recommendedCareer = "You should consider a career in Engineering, such as Civil Engineering, Mechanical Engineering, or Architecture.";
      break;
    case "social":
      recommendedCareer = "You should consider a career in Social Services, such as Psychology, Teaching, or Healthcare.";
      break;
    case "management":
      recommendedCareer = "You should consider a career in Business and Management, such as Project Management, Finance, or Marketing.";
      break;
  }
  const results = document.getElementById("results");
  results.innerHTML = `<h2>Results</h2><p>${recommendedCareer}</p>`;
}
