### Original Notes fron Level 1
//
echo "# [glitch project name]" >> README.md

//git init
initialize git source control, which is disabled by default

//creates the readme file
git add README.md

//sets a user name in the repository
git config user.name [gitusername]

//sets an email address in the repository
git config user.email [email address]

//first commit
git commit -m "first commit"

//renames the current branch to main
git branch - M main

//add the origin
git remote add origin https://github.com/repositoryname

//installs GitHub CLI for Glitch; for VS Code use Windows installer
curl-sS https://webi.sh/gh | sh 

//authenticates devices with your GitHub account
gh auth login

//pushes files with changes from the origin to the main branch in GitHub
git push -u origin main

-------------------------------------------------------------------------------------

//commits changes with a memo
git commit -m "insert your memo here"

//pushes changes from the main branch to the origin
git push

//pull changes from GitHub to another environment
git pull --set-upstream origin main

//publish website
In GitHub, go to Settings > Pages
Set Branch to main
Click save
Wait a few minutes for the link to your website to appear

//view the value of origin and the URL of other remote repositories
git remote -v

//change the origin
git remote set-url origin

//get the current version of git
git --version

//add changes from all files and folders
git add .