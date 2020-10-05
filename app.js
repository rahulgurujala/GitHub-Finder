const github = new GitHub();

const ui = new UI();

//Search Input
const SearchUser = document.getElementById('searchUser');

SearchUser.addEventListener('keyup', (e) => {
  e.preventDefault();
  const userText = e.target.value;
  if (userText !== '') {
    //Make http Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});
