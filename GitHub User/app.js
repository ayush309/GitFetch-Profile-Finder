const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const imagee = document.querySelector(".imageurl");

const fetchusers = async (users) => {
  const api_call = await fetch(`https://api.github.com/users/${users}`);

  const data = await api_call.json();
  return { data: data };
};

const showData = () => {
  fetchusers(inputValue.value).then((res) => {
    console.log(res);

    // imagee.innerHTML = `<img src="${res.data.avatar_url}" alt=""></img>`;

    // imagee.innerHTML = `<span class = "main__profile-value>${res.data.avatar_url}<span>`;

    nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}<span>`;
    unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}<span>`;

    reposContainer.innerHTML = `Repositories: <span class="main__profile-value">${res.data.public_repos}<span>`;

    urlContainer.innerHTML = `Profile Link: <span class="main__profile-value">${res.data.html_url}<span>`;
  });
};

searchButton.addEventListener("click", () => {
  //   console.log("heloo");
  showData();
});
