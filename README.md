# Instameet

Instameet is a web application for people to coordinate meeting times and avoid scheduling conflicts. Users can create a blank schedule for themselves and a group of other users to fill out. Users can register for an account in order to mark the times at which they are available and receive notifications. Users can easily view the overlapping availabilities of all the group members and filter which members they want to isolate using the provided checkboxes.

## Presentation

Our group presentation is at [this link](https://docs.google.com/presentation/d/1CzfdvdovgmM3KbzWPd_l9ZwNhXAyP_EyTLRx38wOEzY/edit?usp=sharing). Accessing it requires a UCLA Google account (@g.ucla.edu).

## Getting Started with Instameet

1.) Run `git clone https://github.com/instameet-35L/instameet.git` for HTTPS protocol or `git@github.com:instameet-35L/instameet.git` for SSH protocol to clone the Instameet source code to your local machine

2.) Using the terminal `cd` into the Instameet directory that was cloned locally

3.) Make sure you have Node v19.1.0 installed on your local system

This can be installed using NVM via curl:

a.) Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash` to install NVM

To initialize NVM run:

a.) `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`

b.) `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`

Verify NVM is installed with command `nvm -v`

Install Node using NVM using:

i.) `nvm install -lts` to install the long term support verison of node

ii.) `nvm use --lts` to tell nvm to use the LTS version of node

4.) Now that Node is installed, run `npm i` to install all required packages to your local system and you are ready to go

## Running Instameet

1.) Run `npm run start` to run the React app on localhost:3000 and host the Express server on localhost:3001

2.) Simply connect to http://localhost:3000 and you are done!

## Calendar Component Instructions:

-The Calendar Component always selects a range
-When selecting date(s), you must select a start to the range and an end to the range
Selecting 1 date example:

1. Click desired date (to mark the start of the range)
2. Click desired date again (to show the end of the range)
